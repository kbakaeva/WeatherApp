import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: '#37383d',
        },
        weatherIconWrapper: {
            height: 300,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        weatherIcon: {
            width: 300,
            height: 300,
        },
        tempWrapper: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
        },
        temperatureText: {
            fontSize: 120,
            lineHeight: 124,
            color: '#9CA3AF',
            fontFamily: FONTS.interBold,
        },
        detailsText: {
            fontSize: 14,
            lineHeight: 18,
            color: '#0876B4',
            marginBottom: 24,
            fontFamily: FONTS.interRegular,
        },
        weatherStateText: {
            fontSize: 20,
            lineHeight: 24,
            color: '#0876B4',
            fontFamily: FONTS.interBold,
        },
        forecastText: {
            fontSize: 20,
            lineHeight: 24,
            marginTop: 10,
            color: '#FFFFFF',
            fontFamily: FONTS.interBold,
        },
    });
    return styles;
};
