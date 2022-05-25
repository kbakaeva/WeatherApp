import { IForecastItem } from "../../../interfaces/IForecastItem";
import { IWeatherItem } from "../../../interfaces/IWeatherItem";
import { ActionTypes } from "../actionTypes";

export const setWeather = (payload: IWeatherItem) => {
    return { type: ActionTypes.SET_WEATHER, payload };
};

export const setForecastList = (payload: IForecastItem) => {
    return { type: ActionTypes.SET_FORECAST_LIST, payload };
};