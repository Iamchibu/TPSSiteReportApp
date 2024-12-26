import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProjectList from '../../src/screens/ProjectList';
import ProjectDetails from '../../src/screens/ProjectDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
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
  );
}
