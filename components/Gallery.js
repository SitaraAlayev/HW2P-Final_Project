// import React, { useState } from 'react';
// import { View, Image, Text, StyleSheet, Alert} from "react-native";
// import Styles from "../Styles"
// import {Main_button} from "../components/Main_button";
// import {Entypo} from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';


// export const Gallery =(props) =>{  

//     const [image, setImage] = useState(null);

//     const pickImage = async () => {
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         base64:true,
//         aspect: [3, 4],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     };



    

//     return (
//       <>
//         <Main_button onPress= {pickImage} >
//             <Entypo name="images" size={30} color="#AD67EA"/>
//             </Main_button>
//      </>
//     );
//   };
//   const styles = StyleSheet.create({
//     image: {
//         width: '100%',
//         height: '100%'
//       },
      

//     });