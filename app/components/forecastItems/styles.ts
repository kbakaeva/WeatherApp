import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: 90,
            marginRight: 8,
            borderRadius: 10,
            paddingVertical: 8,
            alignItems: 'center',
            paddingHorizontal: 4,
            backgroundColor: '#bab9b3',
        },
        days: {
            fontSize: 18,
            lineHeight: 22,
            color: '#37383d',
            fontFamily: FONTS.interMedium,
        },
        date: {
            fontSize: 14,
            lineHeight: 18,
            color: '#2f4f4f',
            fontFamily: FONTS.interRegular,
        },
        icon: {
            width: 40,
            height: 40,
            marginVertical: 5,
        },
    });
    return styles;
};