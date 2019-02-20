import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'speedux';
import { render as reactRender } from 'react-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
  reactRender(
    (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ),
    document.getElementById('root'),
  );
};
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
