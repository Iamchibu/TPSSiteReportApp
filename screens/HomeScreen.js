import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Project Information Form</Text>
      <Button
        title="Start Form"
        onPress={() => navigation.navigate('StepOne')}
      />
    </View>
  );
};

export default HomeScreen;
