import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Alert,AsyncStorage } from "react-native";
import Styles from "../Styles";
import { Main_button } from "../components/Main_button";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from 'expo-media-library';



const Upload_image_scan = () => {

  const [pickedImage, setPickedImage] = useState();//camera

  const [image, setImage] = useState([]);//gallery

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      includeBase64:true,
      saveToPhotos:true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      MediaLibrary.createAssetAsync(result.uri);
      console.log(result);

      setImage(result.uri);
    }
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("images", jsonValue);
    } catch (e) {
        console.log(e, 'The data not saved !');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("images");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    let image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.5,
    });
    console.log(image.uri);

    setPickedImage(image.uri);
  };

  let imagePreview = <Text>No image taken yet</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} />;
  }

  return (
    <View style={Styles.container}>
      {imagePreview}
      <View style={Styles.SelectIcon_buttons}>
        <Main_button onPress={takeImageHandler}>
          <FontAwesome name="camera" size={30} color="#AD67EA" />
        </Main_button>
        <Main_button onPress={pickImage}>
          <Entypo name="images" size={30} color="#AD67EA" />
        </Main_button>
      </View>
    </View>
  );
};

Upload_image_scan.navigationOptions = {
  headerTitle: "העלת תמונה לסריקה",
};
const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});


export default Upload_image_scan;
