import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../redux/actions';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepThree = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.stepThree) || {};
  console.log("Redux State:", formData);

  const [firstName, setFirstName] = React.useState(formData.firstName || '');
  const [lastName, setLastName] = React.useState(formData.lastName || '');
  const [phone, setPhone] = React.useState(formData.phone || '');

  const handleNext = () => {
    dispatch(saveStepData('stepThree', { firstName, lastName, phone }));
    navigation.navigate('StepFour');
  };

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", top: 0, position: "absolute", borderStartWidth: 2, borderStartColor: "#542d84", borderBottomColor: "#c8c808", borderBottomWidth: 0.5 }}>

      <Image
        source={require('../../assets/images/tps_small.png')}
        height={10/2}
        width={10/2}
        resizeMode="center"
        style={{ alignSelf: "flex-start", left: -45 }}
        />
      <Text style={styles.headerText}>Project Manager</Text>

      </View>
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ marginTop: 60 }}>
          <TextInput
              backgroundColor={"#d9d1e9"}
              borderWidth = {1}
              borderColor={"#542d84"}
              // borderColor={this.state.em == "empty" || !this.state.correct && this.state.email != "" ? 'red' : "transparent"}
              width={width * 0.88}
              height={56}
              textAlign={"left"}
              alignSelf={"center"}
              paddingTop={8}
              paddingBottom={8}
              paddingStart={15}
              paddingEnd={22}
              marginBottom={10}
              opacity={1}
              fontSize={16}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // keyboardType="email-address"
              returnKeyType="next"
              placeholder={"First Name"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={firstName}
              onChangeText={setFirstName}
            />

          <TextInput
              backgroundColor={"#d9d1e9"}
              borderWidth = {1}
              borderColor={"#542d84"}
              // borderColor={this.state.em == "empty" || !this.state.correct && this.state.email != "" ? 'red' : "transparent"}
              width={width * 0.88}
              height={56}
              textAlign={"left"}
              alignSelf={"center"}
              paddingTop={8}
              paddingBottom={8}
              paddingStart={15}
              paddingEnd={22}
              marginBottom={10}
              opacity={1}
              fontSize={16}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // keyboardType="email-address"
              returnKeyType="next"
              placeholder={"Last Name"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={lastName}
              onChangeText={setLastName}
            />

          <TextInput
              backgroundColor={"#d9d1e9"}
              borderWidth = {1}
              borderColor={"#542d84"}
              // borderColor={this.state.em == "empty" || !this.state.correct && this.state.email != "" ? 'red' : "transparent"}
              width={width * 0.88}
              height={56}
              textAlign={"left"}
              alignSelf={"center"}
              paddingTop={8}
              paddingBottom={8}
              paddingStart={15}
              paddingEnd={22}
              marginBottom={10}
              opacity={1}
              fontSize={16}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="numeric"
              returnKeyType="next"
              placeholder={"Phone"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={phone}
              onChangeText={setPhone}
            />

            <View style={{ marginTop: 20, alignSelf: "center" }}>
            <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.goBack()}> 
            <Text style={styles.signInText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerBtn} onPress={handleNext}>  
            <Text style={styles.registerText}>Next</Text>
            </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  signInBtn:{
    backgroundColor: "#542d84",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.9, 
    padding: 15,
    marginTop: 50,
    marginBottom: 10
  },
  signInText:{
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
    width: width * 0.9, 
    padding: 15,
    marginBottom: 30,
    alignSelf: "center"
  },
  registerText:{
    color: "#542d84",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  headerText:{
    color: "#542d84",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    marginTop: 18,
    marginEnd: 20,
    width: width * 0.45
  },
  welcomeText: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30
  }
})

export default StepThree;