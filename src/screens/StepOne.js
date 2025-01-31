import React, { useEffect } from 'react';
import { View, Text, Image, Platform, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../redux/actions';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepOne = ({ navigation }) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.stepOne) || {};

  const [firstName, setFirstName] = React.useState(formData.firstName || '');
  const [lastName, setLastName] = React.useState(formData.lastName || '');
  const [address, setAddress] = React.useState(formData.address || '');
  const [city, setCity] = React.useState(formData.city || '');
  const [state, setState] = React.useState(formData.state || '');
  const [zip, setZip] = React.useState(formData.zip || '');

  const handleNext = () => {
    dispatch(saveStepData('stepOne', { firstName, lastName, address, city, state, zip }));
    navigation.navigate('StepTwo');
  };

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/tps_small.png')}
          resizeMode="center"
          style={{ alignSelf: "flex-start", left: -45 }}
        />
        <Text style={styles.headerText}>Home Owner Information</Text>
      </View>

      <ScrollView style={{ marginTop: Platform.OS === "iOS" ? 60 : 50, marginBottom: Platform.OS === "iOS" ? 170 : 100 }}>
        <View style={{ marginTop: 60, marginBottom: 60 }}>
          {[{ placeholder: "First Name", value: firstName, setValue: setFirstName },
            { placeholder: "Last Name", value: lastName, setValue: setLastName },
            { placeholder: "Address", value: address, setValue: setAddress },
            { placeholder: "City", value: city, setValue: setCity },
            { placeholder: "State", value: state, setValue: setState },
            { placeholder: "Zip code", value: zip, setValue: setZip, keyboardType: "numeric" }
          ].map(({ placeholder, value, setValue, keyboardType }, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={"#979797"}
              value={value}
              onChangeText={setValue}
              keyboardType={keyboardType || "default"}
            />
          ))}

          <TouchableOpacity style={styles.registerBtn} onPress={handleNext}>  
            <Text style={styles.registerText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
