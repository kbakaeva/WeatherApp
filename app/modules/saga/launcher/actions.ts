import { SagaActionTypes } from "../sagaActionTypes";

export const getWeather = () => {
    return { type: SagaActionTypes.GET_WEATHER_STATE };
};
