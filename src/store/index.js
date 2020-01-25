import {applyMiddleware, compose, createStore} from 'redux';
import {reducer} from './reducer.js'
import createSagaMiddleware from 'redux-saga';
import todoSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSaga);

export default store;
