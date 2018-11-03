import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

export const configureStore = preloaedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloaedState, composedEnhancer);

  if (process.env.NODE_ENV !== 'production') {
      if(module.hot){
          module.hot.accept('../reducers/rootReducer.js',() => {
              const newRootReducer = require('../reducers/rootReducer').default;
              store.replaceReducer(newRootReducer)
          })
      }
  }
  
  return store;
};
