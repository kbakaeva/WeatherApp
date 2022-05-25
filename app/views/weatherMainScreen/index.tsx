import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, Pressable } from 'react-native';
import { selectForecastList, selectWeather } from '../../modules/redux/weather/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { getWeather } from '../../modules/saga/launcher/actions';
import { SharedElement } from 'react-navigation-shared-element';
import { ForecastItems } from '../../components/forecastItems';
import { IForecastItem } from '../../interfaces/IForecastItem';
import { GradientText } from '../../components/gradientText';
import { IWeatherItem } from '../../interfaces/IWeatherItem';
import { MainHeader } from '../../components/mainHeader';
import { weatherIcons } from './generateWeatherIcons';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
};

export const WeatherMainScreen: FC<Props> = memo(({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();
    const weather: IWeatherItem = useSelector(selectWeather, shallowEqual);
    const forecastList: Array<IForecastItem> = useSelector(selectForecastList, shallowEqual);
    const [filteredForecastDays, setFilteredForecastDays] = useState<Array<any>>([{ date: '', days: '' }]);
    var currentDate = new Date().getDay();
    var weeks: number[] = [0, 1, 2, 3, 4, 5, 6];
    var loopWeek: any = weeks.splice(currentDate).concat(weeks) || [];
    const weekDays: string[] = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const createForecastDays = (): void => {
        var filteredDays: any = [];
        var filteredDate: any = [];
        var res: any = [];
        for (var i = 0; i < loopWeek.length; i++) {
            filteredDays.push(weekDays[loopWeek[i]]);
            var d = new Date();
            d.setDate(d.getDate() + i);
            filteredDate.push(d.getDate());
            res.push({ date: filteredDate[i], days: filteredDays[i] });
            setFilteredForecastDays(res);
        };
    };

    useEffect(() => {
        createForecastDays();
        dispatch(getWeather());
    }, []);

    return (
        <View style={[styles.container, Object.keys(weather).length === 0 && { justifyContent: 'center', alignItems: 'center' }]}>
            {Object.keys(weather).length === 0
                ? <ActivityIndicator size={'large'} />
                : <View>
                    <SharedElement id={`item.mainHeader`}>
                        <MainHeader {...{ weather }} />
                    </SharedElement>
                    <View style={styles.weatherIconWrapper}>
                        <SharedElement id={`item.mainIcon`}>
                            <Image resizeMode='contain' style={styles.weatherIcon} source={weatherIcons[weather.weather[0].icon]} />
                        </SharedElement>
                    </View>
                    <View style={styles.tempWrapper}>
                        <SharedElement id={`item.temperatureText`}>
                            <GradientText style={styles.temperatureText}>{Math.round(weather?.main?.temp)}°c</GradientText>
                        </SharedElement>
                        <Pressable onPress={() => navigation.navigate('WeatherDetailsScreen', { data: weather })} style={(({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }])}>
                            <Text style={styles.detailsText}>Подробнее</Text>
                        </Pressable>
                    </View>
                    <SharedElement id={`item.weatherState`}>
                        <Text numberOfLines={1} style={styles.weatherStateText}>{weather.weather[0].description}</Text>
                    </SharedElement>
                    <Text style={styles.forecastText}>Прогноз погоды на 7 дней</Text>
                    <View style={{ paddingTop: 20 }}>
                        {!forecastList.length
                            ? <ActivityIndicator />
                            :
                            <ScrollView
                                horizontal
                                overScrollMode='never'
                                showsHorizontalScrollIndicator={false}>
                                {filteredForecastDays?.map(({ date, days }, index) => (
                                    <ForecastItems key={index} {...{ date, days, forecastList, index }} />
                                ))}
                            </ScrollView>
                        }
                    </View>
                </View>}
        </View>
    )
});
