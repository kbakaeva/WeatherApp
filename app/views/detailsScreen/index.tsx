import React, { FC, useMemo } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { SharedElement } from 'react-navigation-shared-element';
import { FeelsLikeIcon } from '../../assets/svg/feelsLikeIcon';
import { WindSpeedIcon } from '../../assets/svg/windSpeedIcon';
import { IWeatherItem } from '../../interfaces/IWeatherItem';
import { HumidityIcon } from '../../assets/svg/humidityIcon';
import { PressureIcon } from '../../assets/svg/pressureIcon';
import { TempMaxIcon } from '../../assets/svg/tempMaxIcon';
import { TempMinIcon } from '../../assets/svg/tempMinIcon';
import { MainHeader } from '../../components/mainHeader';
import * as Animatable from 'react-native-animatable';
import { BackIcon } from '../../assets/svg/backIcon';
import { IRoute } from '../../interfaces/IRoute';
import { getStyle } from './styles';
import { weatherIcons } from '../weatherMainScreen/generateWeatherIcons';
import { GradientText } from '../../components/gradientText';
import { shallowEqual, useSelector } from 'react-redux';
import { selectWeather } from '../../modules/redux/weather/selectors';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const DetailsScreen: FC<Props> = ({ navigation, route }) => {
    const styles = useMemo(() => getStyle(), []);
    const { date }: { date: string } = route.params;
    const weather: IWeatherItem = useSelector(selectWeather, shallowEqual);

    const currentDate = new Date();
    const monthNames = [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь",
        "Октябрь", "Ноябрь", "Декабрь"
    ];

    const menuItems = [
        { title: 'По ощущениям', value: `${Math.round(weather.main.feels_like)}°c`, icon: <FeelsLikeIcon /> },
        { title: 'Давление', value: `${weather.main.pressure} Pa`, icon: <PressureIcon /> },
        { title: 'Влажность', value: `${weather.main.humidity}%`, icon: <HumidityIcon /> },
        { title: 'Скорость ветра', value: `${weather.wind.speed} m/s`, icon: <WindSpeedIcon /> },
        { title: 'Максимальная температура', value: `${Math.round(weather.main.temp_max)}°c`, icon: <TempMaxIcon /> },
    ];

    return (
        <View style={styles.container}>
            <Animatable.View
                delay={150}
                duration={300}
                animation={'fadeIn'}>
                <View style={styles.navigationHeader}>
                    <Pressable onPress={() => navigation.goBack()} style={(({ pressed }) => [styles.backIcon, { opacity: pressed ? 0.7 : 1 }])}>
                        <BackIcon />
                    </Pressable>
                    <Text numberOfLines={1} style={styles.detailsText}>{monthNames[currentDate.getMonth()]} {date}, {currentDate.getFullYear()}</Text>
                </View>
            </Animatable.View>
            <View style={{ paddingTop: 20 }}>
                <SharedElement id={`item.mainHeader`}>
                    <MainHeader {...{ weather, date }} />
                </SharedElement>
            </View>
            <View style={styles.infoWrapper}>
                {menuItems.map(({ title, value, icon }) => (
                    <View key={title} style={styles.infoRowWrapper}>
                        <View style={styles.infoTextWrapper}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        </View>
                        <View style={styles.infoIconWrapper}>
                            <Text numberOfLines={1} style={[styles.title, { marginRight: 10 }]}>{value}</Text>
                            {icon}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
};
