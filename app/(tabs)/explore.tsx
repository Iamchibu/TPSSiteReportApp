import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ProjectList from '../../src/screens/ProjectList';
import ProjectDetails from '../../src/screens/ProjectDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="ProjectList">
        <Stack.Screen 
        name="ProjectList" 
        component={ProjectList}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} options={{
          headerShown: false,
          title: ""
        }}/>
      </Stack.Navigator>
      </Provider>
  );
}
