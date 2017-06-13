import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/MainReducer';

const windowIfDefined = typeof window === 'undefined' ? null : window as any;

const middlewares: Array<typeof thunk> = [
  thunk
];

const enhancers = [
  applyMiddleware(...middlewares)
];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default createStore(reducer, {}, composeEnhancers(...enhancers));
