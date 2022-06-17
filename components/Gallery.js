import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert} from "react-native";
import Styles from "../Styles"
import {Main_button} from "../components/Main_button";
import {Entypo} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export const Gallery =(props) =>{  

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Main_button onPress= {pickImage} >
            <Entypo name="images" size={30} color="#AD67EA"/>
            </Main_button>
      </View>
    );
  };
  const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
      },
      

    });