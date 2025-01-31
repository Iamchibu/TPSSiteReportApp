import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../src/screens/HomeScreen'; // Screen One
import StepOne from '../../src/screens/StepOne';       // Screen Two
import StepTwo from '../../src/screens/StepTwo';
import StepThree from '../../src/screens/StepThree';   // Screen Three
import StepFour from '../../src/screens/StepFour';       // Screen Four
import StepFive from '../../src/screens/StepFive';   // Screen Three
import ProjectDetails from '../../src/screens/ProjectDetails';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen name="StepOne" component={StepOne} options={{
          // headerShown: false,
          title: ""
        }}/>
        <Stack.Screen name="StepTwo" component={StepTwo} options={{
          // headerShown: false,
          title: ""
        }}/>
        <Stack.Screen name="StepThree" component={StepThree} options={{
          // headerShown: false,
          title: ""
        }}/>
        <Stack.Screen name="StepFour" component={StepFour} options={{
          // headerShown: false,
          title: ""
        }}/>
        <Stack.Screen name="StepFive" component={StepFive} options={{
          // headerShown: false,
          title: ""
        }}/>
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} options={{
          // headerShown: false,
          title: ""
        }}/>
      </Stack.Navigator>
      </Provider>
  );
}
