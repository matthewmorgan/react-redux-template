import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import App from './App';
import {register} from './serviceWorker';

import { GlobalStyle } from './theme/globalStyle'

ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
      <GlobalStyle/>
    </Provider>,
    document.getElementById('root')
);
register();
