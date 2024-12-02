import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const StepOne = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Homeowner Information</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Next" onPress={() => navigation.navigate('StepTwo')} />
    </View>
  );
};

export default StepOne;
