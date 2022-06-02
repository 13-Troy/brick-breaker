import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { create } from '../../store';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import fetch from 'cross-fetch';

import { UrlSite } from '../../client/services/const';


export default (req: Request, res: Response) => {
  const { devMiddleware } = res.locals.webpack;
  const jsonWebpackStats = devMiddleware.stats.toJson();
  const { assetsByChunkName } = jsonWebpackStats;
  const script = assetsByChunkName.main[0];

  let html = fs.readFileSync(path.resolve(__dirname, '../../../public/index.html'), {
    encoding: 'utf8',
  });


 

   const getProfile = () => {
   
    const https = require('https')
    // const url = `${UrlSite.URL}/auth/user`;
    const url =  'https://randomuser.me/api/';
  
   
  
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
      })
    }).on('error', err => {
      console.log(err.message);
    })

    }


    console.log('getProfile',getProfile());
    
    
  
  

   

 
  const store = create({
    user: {
      first_name: 'first_name',
      second_name: 'johndoe-second_name',
      email: 'johndoe@mail.com',
      login: 'test login',
      phone: '3444444',
      display_name: 'testLogin',
      
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
