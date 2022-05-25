import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: '#37383d',
        },
        navigationHeader: {
            height: 40,
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: 70,
            justifyContent: 'center',
        },
        backIcon: {
            left: 0,
            zIndex: 10,
            position: 'absolute',
        },
        temperatureText: {
            fontSize: 24,
            lineHeight: 28,
            color: '#9CA3AF',
            fontFamily: FONTS.interBold,
        },
        detailsText: {
            fontSize: 24,
            lineHeight: 28,
            color: '#FFFFFF',
            fontFamily: FONTS.interBold,
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
        infoWrapper: {
            width: '100%',
            paddingTop: 10,
            borderRadius: 12,
            paddingBottom: 30,
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: '#bab9b3',
        },
        infoRowWrapper: {
            paddingVertical: 10,
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: '#000000',
        },
        title: {
            fontSize: 14,
            lineHeight: 18,
            color: '#000000',
            fontFamily: FONTS.interLight,
        },
        infoTextWrapper: {
            flex: 0.6,
            justifyContent: 'center',
        },
        infoIconWrapper: {
            flex: 0.7,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
    });
    return styles;
};