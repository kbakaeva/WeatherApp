import React, { FC, useEffect, useMemo } from 'react';
import { Text, Pressable, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated';
import { weatherIcons } from '../../views/weatherMainScreen/generateWeatherIcons';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { SharedElement } from 'react-navigation-shared-element';
import { IForecastItem } from '../../interfaces/IForecastItem';
import { useNavigation } from '@react-navigation/native';
import { getStyle } from './styles';

interface Props {
    date: string;
    days: string;
    index: number;
    forecastList: Array<IForecastItem>;
};

export const ForecastItems: FC<Props> = ({ days, date, forecastList, index }) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: IStackNavigation = useNavigation();
    const opacity: { value: number } = useSharedValue(0);

    const dataForDetails = {
        main: {
            feels_like: forecastList[index]?.feels_like.day,
            pressure: forecastList[index]?.pressure,
            humidity: forecastList[index]?.humidity,
            temp_max: forecastList[index]?.temp.max,
            temp_min: forecastList[index]?.temp.min,
            temp: forecastList[index]?.temp.day,
        },
        wind: {
            speed: forecastList[index]?.wind_speed,
        },
        weather: [
            {
                icon: forecastList[index]?.weather[0].icon,
                description: forecastList[index]?.weather[0].description,
            }
        ]
    };

    const containerStyle = useAnimatedStyle(() => {
        return { opacity: opacity.value }
    });

    useEffect(() => {
        opacity.value = withDelay(index == 0 ? (index + 1) * 400 : index * 400, withTiming(1, { duration: 600 }));
    }, []);

    return (
        <Animated.View style={containerStyle}>
            <Pressable
                onPress={() => navigation.navigate('DetailsScreen', { data: dataForDetails, date })}
                style={(({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }])}>
                <Text numberOfLines={1} style={styles.days}>{days}</Text>
                <Text numberOfLines={1} style={styles.date}>{date}</Text>
                <SharedElement id={'item.mainIcon'}>
                    <Image resizeMode='contain' style={styles.icon} source={weatherIcons[forecastList[index]?.weather[0].icon]} />
                </SharedElement>
                <Text numberOfLines={1} style={styles.date}>{Math.round(forecastList[index]?.temp.max)}°c</Text>
            </Pressable>
        </Animated.View>
    )
};
