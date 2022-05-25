import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { IWeatherItem } from '../../interfaces/IWeatherItem';
import { getStyle } from './styles';
import { IRoute } from '../../interfaces/IRoute';

interface Props {
    weather: IWeatherItem;
    date?: IRoute;
};

export const MainHeader: FC<Props> = ({ date, weather }) => {
    const styles = useMemo(() => getStyle(), []);
    const currentDate = new Date();

    const monthNames = [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь",
        "Октябрь", "Ноябрь", "Декабрь"
    ];

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.dateText}>{monthNames[currentDate.getMonth()]} {date}, {currentDate.getFullYear()}</Text>
                <Text numberOfLines={1} style={styles.locationText}>{weather.name || ''}</Text>
            </View>
        </View>
    )
};
