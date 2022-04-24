import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert} from "react-native";
import Styles from "../Styles"
import {Main_button} from "../components/Main_button";
import {Entypo,FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const Upload_image_scan =(props) =>{  

     const [pickedImage , setPickedImage] =useState();

     const [image, setImage] = useState(null);

     const pickImage = async () => {
       // No permissions request is necessary for launching the image library
       let result = await ImagePicker.launchImageLibraryAsync(
         {
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
       });
   
       if (!result.cancelled) {
         setImage(result.uri);
       }
     };

     const verifyPermissions = async () => {
       const result = await Permissions.askAsync(Permissions.CAMERA);
       if (result.status !== 'granted') {
         Alert.alert(
           'Insufficient permissions!',
           'You need to grant camera permissions to use this app.',
           [{ text: 'Okay' }]
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
       const image = await ImagePicker.launchCameraAsync({
         allowsEditing: true,
         aspect: [16, 9],
         quality: 0.5,
   
       });
   
      setPickedImage(image.uri);
      props.onImageTaken(image.uri);
     };
     
     return(
        <View style={Styles.container}>
          {/* <View style={styles.imagePicker}>
               <View style={styles.imagePreview}>
                  {!pickedImage? (
                  <Text>No image picked yet.</Text>
                  ):(
                  <Image style={styles.image} source={{uri:pickedImage}}/>)}
                </View>
              </View> */}
          <View style={Styles.SelectIcon_buttons}>
               <Main_button onPress={takeImageHandler}>
                    <FontAwesome name="camera" size={30} color="#AD67EA" />
               </Main_button>
               <Main_button onPress= {pickImage} >
                    <Entypo name="images" size={30} color="#AD67EA"/>
               </Main_button>
            </View>
         </View>
     );
};


Upload_image_scan.navigationOptions={
     headerTitle:'העלת תמונה לסריקה'
   };
   const styles = StyleSheet.create({
     imagePicker: {
       alignItems: 'center',
       marginBottom: 15,
     },
     imagePreview: {
       width: '100%',
       height: 200,
       marginBottom: 10,
       justifyContent: 'center',
       alignItems: 'center',
       borderColor: '#ccc',
       borderWidth: 1,
     },
     image: {
       width: '100%',
       height: '100%'
     }
   });
export default Upload_image_scan;