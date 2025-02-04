import React, { useRef } from 'react';
import { 
  View, Text, Image, Platform, TextInput, TouchableOpacity, 
  StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../redux/actions';

const width = Dimensions.get("window").width;

const StepOne = ({ navigation }) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.stepOne) || {};

  const [firstName, setFirstName] = React.useState(formData.firstName || '');
  const [lastName, setLastName] = React.useState(formData.lastName || '');
  const [address, setAddress] = React.useState(formData.address || '');
  const [city, setCity] = React.useState(formData.city || '');
  const [state, setState] = React.useState(formData.state || '');
  const [zip, setZip] = React.useState(formData.zip || '');

  // Refs for input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipRef = useRef(null);

  const handleNext = () => {
    dispatch(saveStepData('stepOne', { firstName, lastName, address, city, state, zip }));
    navigation.navigate('StepTwo');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 10, flex: 1, backgroundColor: "#FFF" }}>
          <View style={styles.headerContainer}>
            <Image
              source={require('../../assets/images/tps_small.png')}
              resizeMode="center"
              style={{ alignSelf: "flex-start", left: -45 }}
            />
            <Text style={styles.headerText}>Home Owner Information</Text>
          </View>

          <ScrollView 
            style={{ marginTop: Platform.OS === "iOS" ? 60 : 50, marginBottom: Platform.OS === "iOS" ? 10 : 50 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ marginTop: 60, marginBottom: 60 }}>
              <TextInput
                ref={firstNameRef}
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor={"#979797"}
                value={firstName}
                onChangeText={setFirstName}
                returnKeyType="next"
                onSubmitEditing={() => lastNameRef.current?.focus()}
              />

              <TextInput
                ref={lastNameRef}
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={"#979797"}
                value={lastName}
                onChangeText={setLastName}
                returnKeyType="next"
                onSubmitEditing={() => addressRef.current?.focus()}
              />

              <TextInput
                ref={addressRef}
                style={styles.input}
                placeholder="Address"
                placeholderTextColor={"#979797"}
                value={address}
                onChangeText={setAddress}
                returnKeyType="next"
                onSubmitEditing={() => cityRef.current?.focus()}
              />

              <TextInput
                ref={cityRef}
                style={styles.input}
                placeholder="City"
                placeholderTextColor={"#979797"}
                value={city}
                onChangeText={setCity}
                returnKeyType="next"
                onSubmitEditing={() => stateRef.current?.focus()}
              />

              <TextInput
                ref={stateRef}
                style={styles.input}
                placeholder="State"
                placeholderTextColor={"#979797"}
                value={state}
                onChangeText={setState}
                returnKeyType="next"
                autoCapitalize="characters"
                maxLength={2}
                onSubmitEditing={() => zipRef.current?.focus()}
              />

              <TextInput
                ref={zipRef}
                style={styles.input}
                placeholder="Zip code"
                placeholderTextColor={"#979797"}
                value={zip}
                maxLength={5}
                onChangeText={setZip}
                keyboardType="numeric"
                returnKeyType="done"
              />

              <TouchableOpacity style={styles.registerBtn} onPress={handleNext}>
                <Text style={styles.registerText}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    position: "absolute",
    borderStartWidth: 2,
    borderStartColor: "#542d84",
    borderBottomColor: "#c8c808",
    borderBottomWidth: 0.5
  },
  input: {
    backgroundColor: "#d9d1e9",
    borderWidth: 1,
    borderColor: "#542d84",
    borderRadius: 5,
    width: width * 0.88,
    height: 56,
    textAlign: "left",
    alignSelf: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16
  },
  registerBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#542d84",
    width: width * 0.9, 
    padding: 15,
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center"
  },
  registerText: {
    color: "#542d84",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  headerText: {
    color: "#542d84",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    marginTop: 18,
    marginEnd: 20,
    width: width * 0.45
  }
});

export default StepOne;
