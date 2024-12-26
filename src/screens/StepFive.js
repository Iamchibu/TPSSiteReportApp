import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepFive = ({ navigation, route }) => {
  const { one, two, three, four } = route.params;
  const [image, setImage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleProjectImageClick = (data) => {
    console.log("Dattttttaaaaa", data)
    setIsModalVisible(true);
    setImage(data)
  };
  
  const handleCloseClick = () => {
      setIsModalVisible(false);
  };

  const handleSubmit = () => {
    // Collect all form data and images for submission
    console.log("Form submitted!");

    const payload = {
      one: one,
      two: two,
      three: three,
      four: four
    }
    _storeData(payload)
    navigation.navigate('Home');
  };

  const removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  const _storeData = async (value) => {
    // await removeItemValue("projectDetails");
    try {
      await AsyncStorage.setItem("projectDetails", JSON.stringify(value));

    } catch (error) {
    }
    console.log("This is for storing data...", value);
  };

  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", top: 0, position: "absolute", borderStartWidth: 2, borderStartColor: "#542d84", borderBottomColor: "#c8c808", borderBottomWidth: 0.5 }}>

  <Image
    source={require('../../assets/images/tps_small.png')}
    height={10/2}
    width={10/2}
    resizeMode="center"
    style={{ alignSelf: "flex-start", left: -45 }}
    />

  <Text style={styles.headerText}>Review and Submit</Text>
  </View>
  <ScrollView style={{ marginTop: 60, marginBottom: 60 }}>
  <View style={styles.barstyle}>
  <Text style={styles.barstyleText}>HOME OWNER'S INFORMATION</Text>
  </View>

  <View style={{ marginBottom: 10 }}>
  {one.firstName ?
  <Text style={styles.textStyle}>First Name: {one.firstName}</Text> :
  <Text style={styles.textStyle}>First Name: Nil</Text>}

  {one.lastName ? 
  <Text style={styles.textStyle}>Last Name: {one.lastName}</Text> : 
  <Text style={styles.textStyle}>Last Name: Nil</Text>}

  {one.address ? 
  <Text style={styles.textStyle}>Address: {one.address}</Text> :
  <Text style={styles.textStyle}>Address: Nil</Text>}

  {one.city ? 
  <Text style={styles.textStyle}>City: {one.city}</Text> :
  <Text style={styles.textStyle}>City: Nil</Text>}

  {one.state ? 
  <Text style={styles.textStyle}>State: {one.state}</Text> :
  <Text style={styles.textStyle}>State: Nil</Text>}

  {one.zip ?
  <Text style={styles.textStyle}>Zip: {one.zip}</Text> : 
  <Text style={styles.textStyle}>Zip: Nil</Text>}
  </View>

  <View style={styles.barstyle}>
  <Text style={styles.barstyleText}>CONTRACTOR INFORMATION</Text>
  </View>

  <View style={{ marginBottom: 10 }}>
  {two.companyName ?
  <Text style={styles.textStyle}>Company Name: {two.companyName}</Text> :
  <Text style={styles.textStyle}>Company Name: Nil</Text>}

  {two.phone ? 
  <Text style={styles.textStyle}>Phone: {two.phone}</Text> :
  <Text style={styles.textStyle}>Phone: Nil</Text>}

  {two.address ?
  <Text style={styles.textStyle}>Address: {two.address}</Text> :
  <Text style={styles.textStyle}>Address: Nil</Text>}

  {two.license ?
  <Text style={styles.textStyle}>License: {two.license}</Text> : 
  <Text style={styles.textStyle}>License: Nil</Text>}
  </View>

  <View style={styles.barstyle}>
  <Text style={styles.barstyleText}>PROJECT MANAGER</Text>
  </View>
  <View style={{ marginBottom: 10 }}>
  {three.firstName ?
  <Text style={styles.textStyle}>First Name: {three.firstName}</Text> :
  <Text style={styles.textStyle}>First Name: Nil</Text>}

  {three.lastName ?
  <Text style={styles.textStyle}>Last Name: {three.lastName}</Text> : 
  <Text style={styles.textStyle}>Last Name: Nil</Text>}

  {three.phone ? 
  <Text style={styles.textStyle}>Phone: {three.phone}</Text> :
  <Text style={styles.textStyle}>Phone: Nil</Text>}
  </View>

  <View style={styles.barstyle}>
  <Text style={styles.barstyleText}>PROJECT SITE PHOTOS</Text>
  </View>
  
      {Object.keys(four).length != 0 ? <View style={styles.gridContainer}>
        {four.map((photo, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer}  onPress={() => handleProjectImageClick(photo)}>
            <Image source={{ uri: photo.uri }} style={styles.image}/>
            {photo.title ? (
              <Text style={styles.imageTextMain}>{photo.title}</Text>
            ) : (
              <Text style={styles.imageTextMain}>No Title</Text>
            )}
            {photo.description ? (
              <Text style={styles.imageText}>{photo.description}</Text>
            ) : (
              <Text style={styles.imageText}>No Description</Text>
            )}
          </TouchableOpacity>
        ))}
      </View> : <Text style={styles.imageTextMain}>No Images Available...</Text>}

      {image && 
            <Modal visible={isModalVisible} transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{image?.title || 'No Title'}</Text>
                <View style={styles.imageContainer}>
                  {image?.uri ? (
                    <Image source={{ uri: image.uri }} style={styles.detailsImage} />
                  ) : (
                    <Text>No Image Available</Text>
                  )}
                  <Text style={styles.imageDescription}>
                    {image?.description || 'No Description'}
                  </Text>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={handleCloseClick}>
                  <Text style={styles.addButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
             } 

  <View style={{ marginTop: 20, alignSelf: "center" }}>
    <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.goBack()}> 
    <Text style={styles.signInText}>Previous</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>  
    <Text style={styles.registerText}>Submit</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  barstyle: {
    width: width,
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderStartColor: "#542d84",
    borderEndColor: "#542d84",
    height: 40,
    padding: 5,
    backgroundColor: "#d9d1e9",
    alignSelf: "center",
    marginBottom: 10
  },
  barstyleText:{
    fontSize: 14,
    color: "#542d84",
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "center",
    margin: 5
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 10,
  },
  imageContainer: {
    width: "45%",
    marginBottom: 20,
    alignItems: "center",
  },
  imageTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  detailsImage: {
    width: width * 0.8,
    height: height * 0.6,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageDescription: {
    fontSize: 12,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#542d84",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
  imageTextMain: {
    textAlign: "center",
    fontSize: 12,
    color: "#542d84",
    fontWeight: "600"
  },
  imageText: {
    textAlign: "center",
    fontSize: 12,
    color: "#542d84",
  },
  projectItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  projectImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
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
    backgroundColor: "#c8c808",
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
  },
  textStyle:{
    fontSize: 13,
    fontWeight: "500",
    marginStart: 10,
    marginBottom: 5,
    color: "#000"
  }
})

export default StepFive;
