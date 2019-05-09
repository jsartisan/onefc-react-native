import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

import env from '@root/env';
import rootSaga from '@saga';
import reducers from '@reducers';

/**
 * logs store update when dispatching
 *
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */

const logger = createLogger();

/**
 * create saga middleware
 *
 * @type {[type]}
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * redux-persist config
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

/**
 * returns list of middlewares
 *
 * @return Array[]
 */
const configureMiddlewares = () => {
  const middlewares = [sagaMiddleware];

  if (env.ENV === 'development') {
    middlewares.push(logger);
  }

  return middlewares;
};

/**
 * configure redux persist
 */
const configurePersistStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};

/**
 * create a store and persistor
 * with configured middlewares
 *
 * adds the auth token in headers
 * if user was logged in previously
 */
const configureStore = () => {
  const middlewares = configureMiddlewares();
  const reducers = configurePersistStore();

  const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
