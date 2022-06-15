import React, { useState } from 'react';
import { View,Text} from 'react-native';
import Styles from '../Styles';
import Card from '../components/Card';
import Main_button from './Main_button';
import Input from './Input';
import View_folders from '../screens/View_folders';


export const Add_Folder = (props)=>{


    const [folderName,setFolderName]=useState("");


    function changeNameFolderHanler(enteredName){
        setFolderName(enteredName);
    }

    function saveFolder()
    {
        if (nameFolderHanler == true)
            FileSystem.documentDirectory 

    }

    return (
    <View style={Styles.centeredView}>
            <Card style={Styles.card}>
            <Text style={{...Styles.textstyle,...props.style}}>בחר שם לתיקייה</Text>
            <Input style={Styles.inputText} 
            maxLenght={20}
            onChangeText={changeNameFolderHanler}
            value={folderName}
            placeholder="הכנס שם תיקייה" />
            <View style={Styles.buttonText}>
                <Main_button onPress={saveFolder}>שמירה</Main_button>
                <Main_button onPress={{}}>ביטול</Main_button>
            </View>
        </Card>
    </View>

    );
};


Add_Folder.navigationOptions={
    headerTitle:'הוספת תיקייה חדשה'
  };

export default Add_Folder