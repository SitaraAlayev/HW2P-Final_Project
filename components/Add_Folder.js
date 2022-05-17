import React, { useState } from 'react';
import { View,Text} from 'react-native';
import Styles from '../Styles';
import Card from '../components/Card';
import Main_button from './Main_button';
import Input from './Input';


export const Add_Folder = (props) =>{

    const [input,setInput]=useState();
    const [save,setSave]=useState();

    return  (
    <View style={Styles.centeredView}>
            <Card style={Styles.card}>
            <Text style={{...Styles.textstyle,...props.style}}>בחר שם לתיקייה</Text>
            <Input style={Styles.inputText} 
             maxLenght={15}
            onChangeText={(text) => {setInput(text)}}
            value={input} />
            <View style={Styles.buttonText}>
                <Main_button onPress={()=>{}}>שמירה</Main_button>
                <Main_button onPress={()=>{}}>ביטול</Main_button>
            </View>
            </Card>
    </View>

    );
};
Add_Folder.navigationOptions={
    headerTitle:'הוספת תיקייה חדשה'
  };

export default Add_Folder