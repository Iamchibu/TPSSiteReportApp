import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../redux/actions';

const { width } = Dimensions.get("window");

const StepTwo = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.stepTwo) || {};
  console.log("Redux State:", formData);

  const [companyName, setCompanyName] = useState('Transform Power Systems');
  const [phone, setPhone] = useState('+1 (617) 123-4567');
  const [address, setAddress] = useState('Boston, MA');
  const [license, setLicense] = useState('AS1DF2QW3ER4');

  const handleNext = () => {
    dispatch(saveStepData('stepTwo', { companyName, phone, address, license }));
    navigation.navigate('StepThree');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/tps_small.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Contractor Information</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {[{
            placeholder: "Company Name", value: companyName, onChange: setCompanyName
          }, {
            placeholder: "Phone Number", value: phone, onChange: setPhone
          }, {
            placeholder: "Address (Street, City, State, Zip)", value: address, onChange: setAddress
          }, {
            placeholder: "License Number", value: license, onChange: setLicense
          }].map((field, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor={"#979797"}
              editable={false}
              value={field.value}
              onChangeText={field.onChange}
            />
          ))}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signInBtn} onPress={() => {
              
              if(companyName || address || license || phone){
                dispatch(saveStepData('stepTwo', { companyName, phone, address, license }));
              }
              navigation.goBack()
              }}> 
              <Text style={styles.signInText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.registerBtn} 
              onPress={handleNext}>  
              <Text style={styles.registerText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 10 },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    position: "absolute", 
    top: 0, 
    left: 0, 
    right: 0,
    padding: 10, 
    borderLeftWidth: 2, 
    borderBottomWidth: 0.5, 
    borderLeftColor: "#542d84", 
    borderBottomColor: "#c8c808"
  },
  logo: { width: 40, height: 40, resizeMode: "contain" },
  headerText: { 
    color: "#542d84", 
    fontSize: 14, 
    fontWeight: "600", 
    textAlign: "right", 
    marginEnd: 20 
  },
  scrollContainer: { marginTop: 50 },
  formContainer: { marginTop: 60 },
  input: {
    backgroundColor: "#d9d1e9",
    borderWidth: 1,
    borderColor: "#542d84",
    width: width * 0.88,
    height: 56,
    alignSelf: "center",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonContainer: { 
    marginTop: 50, 
    marginBottom: 7,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // position: "absolute",
    // bottom: 0
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
  signInText: { color: "#FFF", fontSize: 18, fontWeight: "600", textAlign: "center" },
  registerBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#542d84",
    width: width * 0.45, 
    padding: 15,
    marginBottom: 10
  },
  registerText: { color: "#542d84", fontSize: 18, fontWeight: "600", textAlign: "center" }
});

export default StepTwo;
