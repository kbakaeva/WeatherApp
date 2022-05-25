import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const BackIcon: FC<{}> = () => {
    return (
        <Svg width="36" height="36" fill="none" viewBox="0 0 36 36">
            <Circle cx="18" cy="18" r="18" fill="#ffffff" fillOpacity="0.5" />
            <Path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10l-10 8.5L21 27" />
        </Svg>
    );
};
