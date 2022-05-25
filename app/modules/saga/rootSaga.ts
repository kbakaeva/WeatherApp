import { all, spawn } from 'redux-saga/effects'
import { watchLoadWeatherState } from './launcher';

export default function* rootSaga() {
    try {
        yield all([
            spawn(watchLoadWeatherState),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};
