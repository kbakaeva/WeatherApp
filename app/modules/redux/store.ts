import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './combineReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducer,
    compose(composeWithDevTools(applyMiddleware(...[sagaMiddleware])))
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
