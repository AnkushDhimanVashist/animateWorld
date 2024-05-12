import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {TabNavigator} from './routes/rootNavigation/tabNavigator/TabNavigator';
import DynamicLinkHandler from './components/DynamicLinkHandler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <TabNavigator />
          <DynamicLinkHandler />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
