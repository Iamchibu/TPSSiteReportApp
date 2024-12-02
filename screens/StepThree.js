import React from 'react';
import { View, Text, Button } from 'react-native';

const StepThree = ({ navigation }) => {
  const handleSubmit = () => {
    // Collect all form data and images for submission
    console.log("Form submitted!");
    navigation.navigate('Home');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Final Step: Review and Submit</Text>
      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default StepThree;
