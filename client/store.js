import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

// create object for default data

const defaultState = {};
const devtools = window.devToolsExtension || (() => (noop) => noop);

const middlewares = [
  routerMiddleware(browserHistory),
];
const enhancers = compose(
    applyMiddleware(...middlewares),
    devtools()
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    System.import('./reducers/index').then((newRootReducer) => {
      const nextRootReducer = newRootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  });
}

export const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
