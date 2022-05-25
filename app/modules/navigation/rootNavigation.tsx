import React, { FC } from 'react';
import { View } from 'react-native';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigation';

const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = () => {
	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer ref={navigationRef}>
				<StackNavigator />
			</NavigationContainer>
		</View>
	);
};
