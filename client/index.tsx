import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './layouts';
import { BrowserRouter } from 'react-router-dom';
import { create } from '../store';
import { Provider } from 'react-redux';

// @ts-ignore
const store = create(window.__PRELOADED_STATE__);

// @ts-ignore
delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <Provider store={store}>
      <Page />
    </Provider>
  </BrowserRouter>
);
