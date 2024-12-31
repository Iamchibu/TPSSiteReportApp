import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Modal, 
  TextInput 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const StepFour = ({ navigation, route }) => {
  const { one, two, three } = route.params;
  const [photos, setPhotos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState('');

  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setCurrentImage(result.assets[0]);
      setIsModalVisible(true); // Show modal to enter details
    }
  };

  const addImageWithDetails = () => {
    const titlee = title ? title : 'No Title'
    const descriptionn = description ? description : 'No Description'

    if (currentImage) {
      setPhotos((prevPhotos) => [
        ...prevPhotos,
        { ...currentImage, title, description },
      ]);
      setCurrentImage(null);
      setTitle('');
      setDescription('');
      setIsModalVisible(false);
    }
  };

  const handleProjectImageClick = (data, index) => {
    console.log("Dattttttaaaaa", data)
    setIsImageModalVisible(true);
    setImage(data)
    setImageIndex(index)
  };
  
  const handleCloseClick = () => {
    setIsImageModalVisible(false);
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
      <Text style={styles.headerText}>Project Site Photos</Text>
      </View>

      <ScrollView style={{ marginTop: 50, marginBottom: 60 }}>
        <View style={styles.selectButtonContainer}>
          <TouchableOpacity style={styles.photosBtn} onPress={pickImage}>
            <Text style={styles.signInText}>Add More Images</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>
        {photos.map((photo, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer}  onPress={() => handleProjectImageClick(photo, index)}>
          {/* // <View key={index} style={styles.imageContainer}> */}
            <Image source={{ uri: photo.uri }} style={styles.image} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                setPhotos((prevPhotos) =>
                  prevPhotos.filter((_, i) => i !== index)
                );
              }}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
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
      </View>


        <View style={styles.navigationButtons}>
          <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.signInText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() =>
              navigation.navigate('StepFive', {
                one,
                two,
                three,
                four: photos,
              })
            }
          >
            <Text style={styles.registerText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for adding title and description */}
      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Details</Text>

            {currentImage && 
            <Image
             source={{ uri: currentImage.uri }}
             width={150}
             height={150}
             style={{ marginBottom: 10 }}/>}
            <TextInput
              placeholder="Title"
              placeholderTextColor={"#979797"}
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
            <TextInput
              placeholder="Description"
              placeholderTextColor={"#979797"}
              value={description}
              multiline={true}
              numberOfLines={4}
              onChangeText={setDescription}
              style={styles.inputDesc}
            />
            <TouchableOpacity style={styles.addButton} onPress={addImageWithDetails}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {image && 
            <Modal visible={isImageModalVisible} transparent>
            <View style={styles.modalImageContainer}>
              <View style={styles.modalImageContent}>
                <Text style={styles.modalImageTitle}>{image?.title || 'No Title'}</Text>
                <View style={styles.imageImageContainer}>
                  {image?.uri ? (
                    <Image source={{ uri: image.uri }} style={styles.detailsImage} />
                  ) : (
                    <Text>No Image Available</Text>
                  )}
                  <Text style={styles.modalImageDescription}>
                    {image?.description || 'No Description'}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", width: width * 0.8, justifyContent: "space-between" }}>
                <TouchableOpacity
                  style={styles.deleteeButton}
                  onPress={() => {
                    setPhotos((prevPhotos) =>
                      prevPhotos.filter((_, i) => i !== imageIndex)
                    );
                    setIsImageModalVisible(false);
                  }}
                >
                <Text style={styles.closeButtonText}>Delete</Text>
              </TouchableOpacity>

                <TouchableOpacity style={styles.closeButton} onPress={handleCloseClick}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </Modal>
             } 
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    position: "absolute",
    borderStartWidth: 2,
    borderStartColor: "#542d84",
    borderBottomColor: "#c8c808",
    borderBottomWidth: 0.5,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    alignSelf: "flex-start",
    left: -45,
    height: 30,
    width: 30,
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
  selectButtonContainer: {
    marginVertical: 15,
    marginTop: 60,
    alignSelf: "center",
  },
  photosBtn: {
    backgroundColor: "#a991c4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.9,
    padding: 15,
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },  
  signInText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  imageContainer: {
    width: "45%",
    marginBottom: 20,
    alignItems: "center",
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
  navigationButtons: {
    marginTop: 20,
    alignSelf: "center",
  },
  signInBtn: {
    backgroundColor: "#542d84",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.9,
    padding: 15,
    marginBottom: 10,
  },
  registerBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#542d84",
    width: width * 0.9,
    padding: 15,
  },
  registerText: {
    color: "#542d84",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
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
  input: {
    width: "100%",
    borderColor: "#542d84",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputDesc: {
    width: "100%",
    borderColor: "#542d84",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 90,
    textAlignVertical: 'top'
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
  modalImageContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImageContent: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageImageContainer: {
    width: "45%",
    marginBottom: 20,
    alignItems: "center",
  },
  detailsImage: {
    width: width * 0.8,
    height: height * 0.6,
    borderRadius: 10,
    marginVertical: 10,
  },
  modalImageDescription: {
    fontSize: 12,
    color: "#666",
  },
  deleteeButton: {
    backgroundColor: "#FF0000",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#542d84",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default StepFour;
