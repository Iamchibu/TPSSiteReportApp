import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function ProjectList({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [license, setLicense] = useState('');
  const [msg, setMsg] = useState('');
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    _retrieveData();
  }, []); // Empty dependency array ensures this only runs once

  const _retrieveData = async () => {
    try {
      const res = await AsyncStorage.getItem('projectDetails');
      if (res !== null) {
        const response = JSON.parse(res);
        setProjectData(response);
        setFirstName(response.three.firstName);
        setPhone(response.three.phone);
        setLastName(response.three.lastName);
        setCompanyName(response.two.companyName); 

        console.log('Data retrieved:', response);
      } else {
        console.log('No data found.');
        setMsg('No data found.');
      }
    } catch (error) {
      console.error('Failed to fetch data from AsyncStorage:', error);
    }
  };

  // const _retrieveData = async () => {
  //   try {
  //     const res = await AsyncStorage.getItem('projectDetails');
  //     if (res !== null) {
  //       const response = JSON.parse(res);
  //       setProjectData(response); // Set the full list of projects
  //       console.log('Data retrieved:', response);
  //     } else {
  //       console.log('No data found.');
  //       setMsg('No data found.');
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch data from AsyncStorage:', error);
  //   }
  // };
  
  const handleProjectClick = () => {
    navigation.navigate('ProjectDetails', { data: projectData });
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
      <Text style={styles.headerText}>List of Projects</Text>

      </View>

      {msg ? 
  <View style={{ marginTop: 70 }}>
    <Text style={styles.registerText}>{msg}</Text>
  </View> :
  <View style={{ marginTop: 50 }}>
    <TouchableOpacity 
      style={{ 
        flexDirection: "row", 
        width: width * 0.9, 
        alignSelf: "center", 
        borderBottomWidth: 1, 
        borderBottomColor: "#542d84", 
        padding: 15,
        alignItems: "center" // Ensures vertical alignment of image and text
      }}
      onPress={()=> handleProjectClick()}
    >
      <Image
        source={require('../../assets/images/icon.png')}
        resizeMode="contain" // Resize mode to fit the image neatly
        style={{ 
          width: 40,  // Adjust width and height as needed
          height: 40, 
          marginRight: 10 // Space between image and text
        }}
      />
      <View>
        {companyName ? 
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>{companyName}</Text> :
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>No Company Name</Text>}


        {firstName && lastName ? 
        <Text style={{ color: "#000", fontSize: 12 }}>{firstName} {lastName}</Text> :
        <Text style={{ color: "#000", fontSize: 12 }}>Nil</Text>}

        {phone ? <Text style={{ color: "#000", fontSize: 12 }}>{phone}</Text> :
        <Text style={{ color: "#000", fontSize: 12 }}>Nil</Text>}
      </View>
    </TouchableOpacity>
  </View>
}


    </View>
  );
}

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
