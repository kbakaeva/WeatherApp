import { setForecastList, setWeather } from '../../redux/weather/actions';
import { IForecastItem } from '../../../interfaces/IForecastItem';
import { IWeatherItem } from '../../../interfaces/IWeatherItem';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaActionTypes } from '../sagaActionTypes';
import { getWeather } from './actions';
import { IAxios } from '../../axios';

export function* workerGetWeather({ }: ReturnType<typeof getWeather>) {
    try {
        const apiKey = '4827508460dbaf950d77bdbfb1046cd5';
        const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${50.450001}&lon=${30.523333}&lang=ru&exclude=hourly,current,minutely,alerts&cnt=7&units=metric&appid=${apiKey}`;
        const mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=${apiKey}&lang=ru`;
        const responseDaily: IWeatherItem = yield call(IAxios.post, mainUrl);
        const responseForecast: { daily: IForecastItem } = yield call(IAxios.post, forecastUrl);
        if (responseDaily) yield put(setWeather(responseDaily));
        if (responseForecast) yield put(setForecastList(responseForecast.daily));
    } catch (error) {
        console.error('workerGetWeather: ', error);
    };
};

export function* watchLoadWeatherState() {
    yield takeEvery(SagaActionTypes.GET_WEATHER_STATE, workerGetWeather);
};
