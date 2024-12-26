import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepTwo = ({ navigation, route }) => {
  const { one } = route.params;

  const [companyName, setCompanyName] = useState('Transform Power Systems');
  const [phone, setPhone] = useState('+1 (617) 123 4567');
  const [address, setAddress] = useState('Boston, MA');
  const [license, setLicense] = useState('AS1DF2QW3ER4');

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
      <Text style={styles.headerText}>Contractor Information</Text>

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
              placeholder={"Company Name"}
              placeholderTextColor={"#979797"}
              editable={false}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={companyName}
              onChangeText={setCompanyName}
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
              editable={false}
              // keyboardType="email-address"
              returnKeyType="next"
              placeholder={"Phone Number"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={phone}
              onChangeText={setPhone}
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
              editable={false}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // keyboardType="email-address"
              returnKeyType="next"
              placeholder={"Address (Street, City, State, Zip)"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={address}
              onChangeText={setAddress}
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
              editable={false}
              // keyboardType="email-address"
              returnKeyType="next"
              placeholder={"License Number"}
              placeholderTextColor={"#979797"}
              // ref={(input) => { this.emailTextInput = input; }}
              // onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              // blurOnSubmit={false}
              // value={this.state.email}
              // onChangeText={this.handleEmail}
              value={license}
              onChangeText={setLicense}
            />
            <View style={{ marginTop: 20, alignSelf: "center" }}>
            <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.goBack()}> 
            <Text style={styles.signInText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('StepThree', { one: one, two: { companyName, phone, address, license }})}>  
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

export default StepTwo;
