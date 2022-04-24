import React from 'react';
import { View,Text ,Input} from 'react-native';
import Styles from '../Styles';
import Card from '../components/Card';
import Main_button from './Main_button';


const Add_Folder = (props) =>{
    return (
        <Card style={Styles.card}>
        <Text style={{...Styles.textstyle,...props.style}}>{props.children}</Text>
        <Input style={Styles.inputText}  maxLenght={15} />
        <View style={Styles.buttonText}>
            <Main_button >{props.children}</Main_button>
            <Main_button>{props.children}</Main_button>
        </View>
    </Card>

    );
};
export default Add_Folder;