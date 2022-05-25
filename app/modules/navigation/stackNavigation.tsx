import React, { FC } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from '@react-navigation/stack';
import { WeatherMainScreen } from '../../views/weatherMainScreen';
import { WeatherDetailsScreen } from '../../views/weatherDetailsScreen';
import { DetailsScreen } from '../../views/detailsScreen';

const Stack = createSharedElementStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="WeatherMainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
        })}>
            <Stack.Screen name="WeatherMainScreen" component={WeatherMainScreen} />
            <Stack.Screen
                name="WeatherDetailsScreen"
                options={{
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 400 } },
                        close: { animation: 'timing', config: { duration: 400 } }
                    },
                    cardStyle: { backgroundColor: 'white' },
                    cardStyleInterpolator: ({ current: { progress } }) => { return { cardStyle: { opacity: progress } } }
                }}
                component={WeatherDetailsScreen} sharedElements={() => {
                    return [
                        {
                            id: `item.mainIcon`,
                            animation: 'fade-in',
                            resize: 'clip',
                            align: 'center-top',
                        },
                        {
                            id: `item.mainHeader`,
                            animation: 'move',
                            align: 'center-top',
                        },
                        {
                            id: `item.temperatureText`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                        {
                            id: `item.weatherState`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                    ];
                }} />
            <Stack.Screen
                name="DetailsScreen"
                options={{
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 400 } },
                        close: { animation: 'timing', config: { duration: 400 } }
                    },
                    cardStyle: { backgroundColor: 'white' },
                    cardStyleInterpolator: ({ current: { progress } }) => { return { cardStyle: { opacity: progress } } }
                }}
                component={DetailsScreen} sharedElements={() => {
                    return [
                        {
                            id: `item.mainIcon`,
                            animation: 'fade-in',
                            resize: 'clip',
                            align: 'center-top',
                        },
                        {
                            id: `item.mainHeader`,
                            animation: 'move',
                            align: 'center-top',
                        },
                        {
                            id: `item.temperatureText`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                        {
                            id: `item.weatherState`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                    ];
                }} />
        </Stack.Navigator>
    );
};
