import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert} from "react-native";
import Styles from "../Styles"
import {Main_button} from "../components/Main_button";
import {Entypo,FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const Upload_image_scan =(props) =>{  

     const [pickedImage , setPickedImage] =useState();

     const [save,setSave]=useState(false);

     const [image, setImage] = useState(null);

     const pickImage = async () => {
       let result = await ImagePicker.launchImageLibraryAsync(
         {
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
        image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
        allowsMultipleSelection:true,
        onPictureSaved: this.saveImage.bind(this),
        
   
       });
       console.log(image.uri);
   
       setPickedImage(image.uri);
     };




     
     return(
          <View style={Styles.container}>
            <ScrollView>
            
            <View style={Styles.SelectIcon_buttons}>
                <Main_button onPress={takeImageHandler}>
                      <FontAwesome name="camera" size={30} color="#AD67EA" />
                </Main_button>
                <Main_button onPress= {pickImage} >
                      <Entypo name="images" size={30} color="#AD67EA"/>
                </Main_button>
              </View>
            </ScrollView>
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
     image: {
       width: '100%',
       height: '100%'
     }
   });
export default Upload_image_scan;