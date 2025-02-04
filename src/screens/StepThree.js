import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../redux/actions';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepThree = ({ navigation }) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.stepThree) || {};

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);

  const [firstName, setFirstName] = React.useState(formData.firstName || '');
  const [lastName, setLastName] = React.useState(formData.lastName || '');
  const [phone, setPhone] = React.useState(formData.phone || '');

  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');
  
    // Ensure we only take the last 10 digits (ignore existing "+1" if present)
    const trimmed = cleaned.startsWith('1') ? cleaned.slice(1, 11) : cleaned.slice(0, 10);
  
    // Apply formatting: +1 (XXX) XXX-XXXX
    if (trimmed.length > 6) {
      return `+1 (${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
    } else if (trimmed.length > 3) {
      return `+1 (${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
    } else if (trimmed.length > 0) {
      return `+1 (${trimmed}`;
    } else {
      return '+1 ';
    }
  };
  
  
  const handleNext = () => {
    dispatch(saveStepData('stepThree', { firstName, lastName, phone }));
    navigation.navigate('StepFour');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: "#FFF", padding: 10 }}>
          <View style={styles.headerContainer}>
            <Image
              source={require('../../assets/images/tps_small.png')}
              resizeMode="center"
              style={{ alignSelf: "flex-start", left: -45 }}
            />
            <Text style={styles.headerText}>Project Manager</Text>
          </View>

          <ScrollView
            style={{ marginTop: Platform.OS === "iOS" ? 60 : 50, marginBottom: Platform.OS === "iOS" ? 170 : 100 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
            <View style={{ marginTop: 60 }}>
              <TextInput
                ref={firstNameRef}
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#979797"
                value={firstName}
                onChangeText={setFirstName}
                returnKeyType="next"
                onSubmitEditing={() => lastNameRef.current.focus()}
              />
              <TextInput
                ref={lastNameRef}
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#979797"
                value={lastName}
                onChangeText={setLastName}
                returnKeyType="next"
                onSubmitEditing={() => phoneRef.current.focus()}
              />
              <TextInput
                ref={phoneRef}
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="#979797"
                keyboardType="numeric"
                value={phone}
                maxLength={17}
                returnKeyType="done"
                onChangeText={(text) => setPhone(formatPhoneNumber(text))}
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signInBtn} onPress={() => { 
                  if(firstName || lastName || phone){
                    dispatch(saveStepData('stepThree', { firstName, lastName, phone }));
                  }
                  navigation.goBack()
                  }}>
                  <Text style={styles.signInText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn} onPress={handleNext}>
                  <Text style={styles.registerText}>Next</Text>
                </TouchableOpacity>
              </View>
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
  buttonContainer: { 
    marginTop: 100, 
    marginBottom: 7,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  signInBtn: {
    backgroundColor: "#542d84",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.45,
    padding: 15,
    marginBottom: 10
  },
  signInText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  registerBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#542d84",
    width: width * 0.45,
    padding: 15,
    marginBottom: 10,
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

export default StepThree;
