import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, Modal, TouchableOpacity, Platform, ScrollView } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function TabTwoScreen({ navigation, route }) {
  const [image, setImage] = useState('');
  const { data } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);

const handleProjectImageClick = (data) => {
    console.log("Dattttttaaaaa", data)
    setIsModalVisible(true);
    setImage(data)
  };
  
  const handleCloseClick = () => {
      setIsModalVisible(false);
  };
  
  return (
    <View style={{ padding: 0, flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", top: 0, position: "absolute", borderStartWidth: 2, borderStartColor: "#542d84", borderBottomColor: "#c8c808", borderBottomWidth: 0.5 }}>

      <Image
        source={require('../../assets/images/tps_small.png')}
        height={10/2}
        width={10/2}
        resizeMode="center"
        style={{ alignSelf: "flex-start", left: -45 }}
        />
      <Text style={styles.headerText}>Project Details</Text>
      </View>

  <ScrollView style={styles.detailsContainer}>
    <View style={styles.barstyle}>
    <Text style={styles.barstyleText}>HOME OWNER'S INFORMATION</Text>
    </View>
    <View style={{ marginBottom: 10 }}>
    {data?.one?.firstName ? 
    <Text style={styles.textStyle}>First Name: {data?.one?.firstName}</Text> : 
    <Text style={styles.textStyle}>First Name: Nil</Text>}

    {data?.one?.lastName ? 
    <Text style={styles.textStyle}>Last Name: {data?.one?.lastName}</Text> :
    <Text style={styles.textStyle}>Last Name: Nil</Text>}

    {data?.one?.address ? 
    <Text style={styles.textStyle}>Address: {data?.one?.address}</Text> :
    <Text style={styles.textStyle}>Address: Nil</Text>}

    {data?.one?.city ? 
    <Text style={styles.textStyle}>City: {data?.one?.city}</Text> :
    <Text style={styles.textStyle}>City: Nil</Text>}

    {data?.one?.state ?
    <Text style={styles.textStyle}>State: {data?.one?.state}</Text> :
    <Text style={styles.textStyle}>State: Nil</Text>}

    {data?.one?.zip ? 
    <Text style={styles.textStyle}>Zip: {data?.one?.zip}</Text> : 
    <Text style={styles.textStyle}>Zip: Nil</Text>}
    </View>

    <View style={styles.barstyle}>
    <Text style={styles.barstyleText}>CONTRACTOR INFORMATION</Text>
    </View>
    <View style={{ marginBottom: 10 }}>
    {data?.two?.companyName ? 
    <Text style={styles.textStyle}>Company Name: {data?.two?.companyName}</Text> :
    <Text style={styles.textStyle}>Company Name: Nil</Text>}

    {data?.two?.phone ? 
    <Text style={styles.textStyle}>Phone: {data?.two?.phone}</Text> : 
    <Text style={styles.textStyle}>Phone: Nil</Text>}

    {data?.two?.address ? 
    <Text style={styles.textStyle}>Address: {data?.two?.address}</Text> :
    <Text style={styles.textStyle}>Address: Nil</Text>}

    {data?.two?.license ? <Text style={styles.textStyle}>License: {data?.two?.license}</Text> : 
    <Text style={styles.textStyle}>License: Nil</Text>}
    </View>

    <View style={styles.barstyle}>
    <Text style={styles.barstyleText}>PROJECT MANAGER</Text>
    </View>
    <View style={{ marginBottom: 10 }}>
    {data?.three?.firstName ? 
    <Text style={styles.textStyle}>First Name: {data?.three?.firstName}</Text> : 
    <Text style={styles.textStyle}>First Name: Nil</Text>}

    {data?.three?.lastName ? 
    <Text style={styles.textStyle}>Last Name: {data?.three?.lastName}</Text> : 
    <Text style={styles.textStyle}>Last Name: Nil</Text>}

    {data?.three?.phone ?
    <Text style={styles.textStyle}>Phone: {data?.three?.phone}</Text> : 
    <Text style={styles.textStyle}>Phone: Nil</Text>}
    </View>

    <View style={styles.barstyle}>
    <Text style={styles.barstyleText}>PROJECT SITE PHOTOS</Text>
    </View>
         {Object.keys(data?.four.photos).length != 0 ? 
         <ScrollView style={{ marginBottom: Platform.OS === "iOS" ?  70 : 40 }}>
          {data?.four?.photos.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.projectItem}
              onPress={() => handleProjectImageClick(item)}
            >
              <Image
                source={{ uri: item.uri }}
                style={styles.projectImage}
              />
              <View>
                {item.title ? <Text style={styles.projectTitle}>{item.title}</Text> :
                <Text style={styles.projectTitle}>No Title</Text>}
                {item.description ? <Text style={styles.projectDescription}>{item.description}</Text> : 
                <Text style={styles.projectDescription}>No Description</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView> : <Text style={styles.imageTextMsg}>No Image Available...</Text>}

            {image && 
            
          <Modal visible={isModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{image?.title || 'No Title'}</Text>
              <View style={styles.imageContainer}>
                {image?.uri ? (
                  <Image source={{ uri: image.uri }} style={styles.detailsImage} />
                ) : (
                  <Text style={styles.imageTextMsg}>No Image Available..</Text>
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
  </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#c8c808",
    paddingBottom: 10,
  },
  imageTextMsg: {
    textAlign: "center",
    fontSize: 12,
    color: "#542d84",
    fontWeight: "600"
  },
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
  headerText:{
    color: "#542d84",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    marginTop: 18,
    marginEnd: 20,
    width: width * 0.45
  },
  messageContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  messageText: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "600",
  },
  textStyle:{
    fontSize: 13,
    fontWeight: "500",
    marginStart: 10,
    marginBottom: 5,
    color: "#000"
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
  projectDescription: {
    fontSize: 12,
    color: "#666",
    width: width * 0.78
  },
  detailsContainer: {
    marginTop: Platform.OS === "iOS" ? 80 : 60,
    marginBottom: Platform.OS === "iOS" ?  150 : 60
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 5,
  },
  imageContainer: {
    marginBottom: 20,
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
});
