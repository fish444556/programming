import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
  composeEnhancers(applyMiddleware()));

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
