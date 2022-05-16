import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Page from './layouts';
import { serviceWorker } from './serviceWorker';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Page />);

serviceWorker();
