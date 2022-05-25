import { IRootState } from "../../../interfaces/IRootState";

export const selectWeather = (state: IRootState) => {
    return state.Weather.weather;
};

export const selectForecastList = (state: IRootState) => {
    return state.Weather.forecastList;
};
