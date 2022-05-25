import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RootNavigation } from './app/modules/navigation/rootNavigation';
import { store } from './app/modules/redux/store';
import { Provider } from 'react-redux';

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#37383d' }}>
      <StatusBar backgroundColor={'#37383d'} barStyle={'dark-content'} />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;