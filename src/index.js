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

const defaultFeedback = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};
const feedbackReducer = (state = defaultFeedback, action) => {
  switch (action.type) {
    case 'SET_FEELING':
      return {
        ...state,
        feeling: action.payload,
      };
    case 'SET_UNDERSTANDING':
      return {
        ...state,
        understanding: action.payload,
      };
    case 'SET_SUPPORT':
      return {
        ...state,
        support: action.payload,
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'CLEAR_REDUCER':
      return defaultFeedback;
    default:
      return defaultFeedback;
  }
};

// const feelingReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_FEELING':
//       return action.payload;
//     case 'CLEAR_REDUCER':
//       return (state = '');
//     default:
//       return state;
//   }
// };

// const understandingReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_UNDERSTANDING':
//       return action.payload;
//     case 'CLEAR_REDUCER':
//       return (state = '');
//     default:
//       return state;
//   }
// };

// const supportReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_SUPPORT':
//       return action.payload;
//     case 'CLEAR_REDUCER':
//       return (state = '');
//     default:
//       return state;
//   }
// };

// const commentsReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_COMMENTS':
//       return action.payload;
//     case 'CLEAR_REDUCER':
//       return (state = '');
//     default:
//       return state;
//   }
// };

const adminReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_DATA':
      return action.payload;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    adminReducer,
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
