import { Pressable,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../Styles";

function IconButton({onPress,icon,children})
{
    return(
    <Pressable style={({pressed})=>[styles.button,pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} size={30} color="#AD67EA" />
        <Text style={Styles.buttonText}>{children}</Text>
    </Pressable>
);
     
   
} 

export default IconButton;

const styles=StyleSheet.create({
    button:
    {
        padding:8,
        margin:4,
        justifyContent:'center',
        alignItems:'center',

    },
    pressed:
    {
        opacity:0.7
    }

});