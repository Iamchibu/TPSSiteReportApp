import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: height, backgroundColor: "#FFF" }}>
      <Image
        source={require('../../assets/images/tps_small.png')}
        style={{ padding: 0, position: "absolute", top: 150, alignSelf: "center" }}
        />

      <Text style={styles.welcomeText}>Welcome to TPS Site Report App</Text>

      <View style={{ marginVertical: 15, justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('StepOne')}> 
          <Text style={styles.signInText}>Start Form</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('explore')}>  
          <Text style={styles.registerText}>View All Site Reports</Text>
        </TouchableOpacity>
      </View>
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
  },
  registerText:{
    color: "#542d84",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  welcomeText: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30
  }
})

//#c8c808 - dark yellow
//#d9d1e9 -light purple
//#a991c4
//#8e75ae
//#ac94bc
//#7951a9
//#ccc460
//#855ca6
//#886c58

export default HomeScreen;


// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => (
//   <View>
//     <Text>Home Screen</Text>
//     <Button title="Go to Step One" onPress={() => navigation.navigate('StepOne')} />
//   </View>
// );

// export default HomeScreen;
