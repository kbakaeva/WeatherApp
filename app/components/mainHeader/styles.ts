import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 100,
            alignItems: 'center',
            flexDirection: 'row',
        },
        textWrapper: {
            flex: 1,
        },
        dateText: {
            fontSize: 18,
            lineHeight: 22,
            color: '#9CA3AF',
            fontFamily: FONTS.interRegular,
        },
        locationText: {
            fontSize: 48,
            lineHeight: 52,
            color: '#FFFFFF',
            fontFamily: FONTS.interBold,
        },
        iconWrapper: {
            paddingLeft: 20,
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
    });
    return styles;
};