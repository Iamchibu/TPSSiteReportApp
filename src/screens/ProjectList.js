import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../../redux/actions';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function ProjectList({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('No data found.');
  const [projectData, setProjectData] = useState(null);

  const dispatch = useDispatch();
  const projects = useSelector(state => state.form.projects);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

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
  
  const handleProjectClick = (item) => {
    console.log(item)
    navigation.navigate('ProjectDetails', { data: item });
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

      {projects.length == 0 ? 
      
  <View style={{ marginTop: 70 }}>
    <Text style={styles.registerText}>{msg}</Text>
  </View> :
  <View style={{ marginTop: 50 }}>
    <FlatList
        data={projects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
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
      onPress={()=> handleProjectClick(item)}
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
        {item.two.companyName ? 
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>{item.two.companyName}</Text> :
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>No Company Name</Text>}


        {item.three.firstName && item.three.lastName ? 
        <Text style={{ color: "#000", fontSize: 12 }}>{item.three.firstName} {item.three.lastName}</Text> :
        <Text style={{ color: "#000", fontSize: 12 }}>Nil</Text>}

        {item.three.phone ? <Text style={{ color: "#000", fontSize: 12 }}>{item.three.phone}</Text> :
        <Text style={{ color: "#000", fontSize: 12 }}>Nil</Text>}
      </View>
    </TouchableOpacity>
    )}
    />
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
