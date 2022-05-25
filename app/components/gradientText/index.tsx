import React, { FC } from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    style: object;
};

export const GradientText: FC<Props> = (props: any) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                useAngle
                angle={180}
                angleCenter={{x: 0, y: 0}}
                end={{ x: 0, y: 0 }}
                start={{ x: 0, y: 0 }}
                colors={["#FFFFFF", "#EDEDED", "#505050"]}>
                {/* colors={["#2B2B2B",  "#FFFFFF"]}> */}
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    )
};
