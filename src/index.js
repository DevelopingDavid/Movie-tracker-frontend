import React from 'react';
import ReactDOM from 'react-dom';
import './Main.scss';
import App from '../src/containers/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
);