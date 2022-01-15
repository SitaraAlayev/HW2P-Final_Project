import React from "react";
import { View,Text,FlatList } from "react-native";
import Styles from "../Styles"
import {Main_button} from "../components/Main_button";
import {Entypo,FontAwesome } from '@expo/vector-icons';


const Upload_image_scan =(props) =>{  
     
     return(
        <View style={Styles.container}>
          <View style={Styles.SelectIcon_buttons}>
               <Main_button onPress= {() =>{props.navigation.navigate('Image_picker_camera')}}>
                    <FontAwesome name="camera" size={30} color="#AD67EA" />
                </Main_button>
               <Main_button onPress= {() =>{props.navigation.navigate('Image_picker_gallery')} }> 
                    <Entypo name="images" size={30} color="#AD67EA"/>
                 </Main_button>
               </View>
               
               
        </View>
        

     );
};

export default Upload_image_scan;