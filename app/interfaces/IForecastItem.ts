export interface IForecastItem {
        dt: number,
        temp: {
            day: number,
            min: number,
            max: number,
            night: number,
            eve: number,
            morn: number
        },
        feels_like: {
            day: number,
            night: number,
            eve: number,
            morn: number
        },
        pressure: number,
        humidity: number,
        wind_speed: number,
        weather: [
            {
                id: number,
                main: string,
                description: string,
                icon: string
            }
        ],
    }
