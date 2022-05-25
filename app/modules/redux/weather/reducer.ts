import { IForecastItem } from "../../../interfaces/IForecastItem";
import { IWeatherItem } from "../../../interfaces/IWeatherItem";
import { ActionTypes } from "../actionTypes";

export interface IWeather {
    weather: IWeatherItem,
    forecastList: Array<IForecastItem>,
};

export const initState: IWeather = {
    weather: {} as IWeatherItem,
    forecastList: [] as Array<IForecastItem>,
};

export const Weather = (state: IWeather = initState, action: { type: string, payload: any }): IWeather => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_WEATHER:
            return { ...state, weather: payload };
        case ActionTypes.SET_FORECAST_LIST:
            return { ...state, forecastList: payload };
        default:
            return state;
    };
};
