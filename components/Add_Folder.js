import React, { useState } from 'react';
import { View,Text} from 'react-native';
import Styles from '../Styles';
import Card from '../components/Card';
import Main_button from './Main_button';
import Input from './Input';
import * as FileSystem from 'expo-file-system';



export const Add_Folder = (props,navigation)=>{


    const [folderName,setFolderName]=useState([]);
    const [folderItems, setFolderItems]=useState([]);

    const handleAddFolder =()=>
    {
        setFolderItems([...folderItems,folderName])
        
    }


    function changeNameFolderHanler(enteredName){
        setFolderName(enteredName);
    }

    function saveFolder(folderName)
    {
        if (nameFolderHanler === true)
        {

            const newFolderUri=FileSystem.documentDirectory()
            const newfolder= new Folder(folderName,newFolderUri);
            console.log(newfolder);
        }

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
                <Main_button onPress={FileSystem.makeDirectoryAsync()}>שמירה</Main_button>
                <Main_button onPress={() => props.navigation.goBack()}>ביטול</Main_button>
            </View>
        </Card>
    </View>

    );
};


Add_Folder.navigationOptions={
    headerTitle:'הוספת תיקייה חדשה'
  };

export default Add_Folder;