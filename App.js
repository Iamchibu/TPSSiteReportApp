import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StepOne from './screens/StepOne';
import StepTwo from './screens/StepTwo';
import StepThree from './screens/StepThree';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="StepThree" component={StepThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
