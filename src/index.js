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
  if (action.type === 'SET_FEELING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'SET_SUPPORT') {
    return action.payload;
  }
  return state;
};

const commentsReducer = (state = '', action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  }
  return state;
};

const pageReducer = (state = 'home', action) => {
  if (action.type === 'feeling') {
    return 'feeling';
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
    pageReducer,
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
