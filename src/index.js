import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

/*
state = {
    feeling: number,
    understanding: number,
    support: number,
    comments: STRING
}
*/

const feelingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FEELING':
      return action.payload;
      break;
    case 'CLEAR_REDUCER':
      return (state = '');
      break;
    default:
      return state;
  }
};

const understandingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_UNDERSTANDING':
      return action.payload;
      break;
    case 'CLEAR_REDUCER':
      return (state = '');
      break;
    default:
      return state;
  }
};

const supportReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SUPPORT':
      return action.payload;
      break;
    case 'CLEAR_REDUCER':
      return (state = '');
      break;
    default:
      return state;
  }
};

const commentsReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
      break;
    case 'CLEAR_REDUCER':
      return (state = '');
      break;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
