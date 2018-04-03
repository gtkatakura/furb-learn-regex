import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import App from './screens/App';
import store from './store';

moment.locale('pt-br');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./screens/App', () => { render(App); });
}
