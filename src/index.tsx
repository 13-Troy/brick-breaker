import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Page from './layouts';
import { serviceWorker } from './serviceWorker';

import store from './store/configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Page />
  </Provider>
);

serviceWorker();
