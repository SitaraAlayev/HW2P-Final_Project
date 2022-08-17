// import React, { useState } from 'react';
// import { View, Image, Text, StyleSheet, Alert} from "react-native";
// import Styles from "../Styles"
// import {Main_button} from "../components/Main_button";
// import {FontAwesome } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';

// export const Camera =() =>{

//     const [pickedImage , setPickedImage] =useState();

//     const verifyPermissions = async () => {
//         const result = await Camera.requestCameraPermissionsAsync();
//         if (result.status !== 'granted') {
//           Alert.alert(
//             'Insufficient permissions!',
//             'You need to grant camera permissions to use this app.',
//             [{ text: 'Okay' }]
//           );
//           return false;
//         }
//         return true;
//       };
    
//         async function takeImageHandler() {
//         const hasPermission = await verifyPermissions();
//         if (!hasPermission) {
//             return;
//         }
//          const image = await ImagePicker.launchCameraAsync({
//          allowsEditing: true,
//          aspect: [3, 4],
//          quality: 0.5,
    
//         });
//         console.log(image.uri);
    
//         setPickedImage(image.uri);
//       };
 
//       let imagePreview=<Text>No image taken yet</Text>;
//       if(pickedImage)
//       {
//        imagePreview=<Image source={{uri:pickedImage}}/>
//       };
    

//     return(
//         <View style={Styles.container}> 
//             {imagePreview}
//             <Image source={{uri:pickedImage}} />         
//         <View style={Styles.SelectIcon_buttons}>
//             <Main_button onPress={takeImageHandler}>
//                     <FontAwesome name="camera" size={30} color="#AD67EA" />
//             </Main_button>
//             </View>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     imagePreview: {
//         width: '100%',
//         height:200,
//         marginVertical:8,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'white',
//         borderRadius:4,
//       }
//     });
    
          

// export default Camera;




