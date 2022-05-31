import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { create } from '../../store';
import { Provider } from 'react-redux';

import { ServerStyleSheet } from 'styled-components';

export default (req: Request, res: Response) => {
  const { devMiddleware } = res.locals.webpack;
  const jsonWebpackStats = devMiddleware.stats.toJson();
  const { assetsByChunkName } = jsonWebpackStats;
  const script = assetsByChunkName.main[0];

  let html = fs.readFileSync(path.resolve(__dirname, '../../../public/index.html'), {
    encoding: 'utf8',
  });

  const store = create({
    user: {
      username: 'johndoe',
      email: 'johndoe@mail.com',
    },
  });

  const sheet = new ServerStyleSheet();

  if (process.env.NODE_ENV === 'development') {
    delete require.cache[require.resolve('../../../bundle/ssr.client.js')];
  }

  const App = require('../../../bundle/ssr.client.js').default;

  const reactHtml = ReactDOMServer.renderToString(sheet.collectStyles(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  ));

  const styleTags = sheet.getStyleTags();

  html = html.replace(
      `</head>`,
  `${styleTags}
      </head>`
  )

  html = html.replace(
    '<div id="root"></div>',
    `<script>
                    window.__PRELOADED_STATE__=${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
                </script>
                <div id="root">${reactHtml}</div>
                <script defer src="${script}"></script>
  `);

  // set header and status
  res.contentType('text/html');
  res.status(200);

  return res.send(html);
}
