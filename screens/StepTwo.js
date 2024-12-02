import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const StepTwo = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 0 }, (response) => {
      if (!response.didCancel && response.assets) {
        setPhotos([...photos, ...response.assets]);
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Project (Site) Photos Checklist</Text>
      <Button title="Select Photos" onPress={pickImage} />

      <ScrollView horizontal>
        {photos.map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </ScrollView>

      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button title="Next" onPress={() => navigation.navigate('StepThree')} />
    </View>
  );
};

export default StepTwo;
