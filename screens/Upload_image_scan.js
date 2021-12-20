import React from "react";
import { View,Text } from "react-native";
import Styles from "../Styles"
import {Main_button} from "../components/Main_button";


const Upload_image_scan =(props) =>{      
      return(
        <View style={Styles.container}>
            <View style={Styles.SelectContainer}>
             <Text style={Styles.textstyle} >
                ?האם תרצה לעלות תמונה מהגלריה או לצלם במצלמה
                </Text>
                <Main_button style={Styles.SelectContainer_buttons} onPress= {() =>{props.navigation.navigate('Image_picker_camera')} }>
                     מצלמה
                </Main_button>
                <Main_button style={Styles.SelectContainer_buttons} onPress= {() =>{props.navigation.navigate('Image_picker_gallery')} }> 
                     גלריה
                </Main_button>
                </View>
        </View>
        

    );
};

export default Upload_image_scan;