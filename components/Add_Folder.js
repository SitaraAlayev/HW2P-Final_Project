import React, { useState } from 'react';
import { View,Text,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Styles from '../Styles';
import Card from '../components/Card';
import Main_button from './Main_button';
import Input from './Input';
import {v4 as uuidv4} from 'uuid';
import { Folder } from '../models/folder';
import * as FileSystem from 'expo-file-system';


export const Add_Folder = ({props,navigation})=>{

    const [folderName,setFolderName]=useState([]);

    const [folderItems, setFolderItems]=useState([]);


    function changeNameFolderHanler(enteredName){
        setFolderName(enteredName);
    }



    function saveFolder(Folder)
    {
        const folderDir = FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + {enteredName}
            ).catch(e => {
            console.log(e, 'Directory exists');
          });

        const folderData=new Folder(enteredName,);
        onCreateFolder();


    }

    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>    
        <View style={Styles.centeredView}>
                <Card style={Styles.card}>
                <Text style={{...Styles.textstyle,...props.style}}>בחר שם לתיקייה</Text>
                <Input style={Styles.inputText} 
                maxLenght={20}
                onChangeText={changeNameFolderHanler}
                value={folderName}
                placeholder="הכנס שם תיקייה" />
                <View style={Styles.buttonText}>
                    <Main_button onPress={() => props.navigation.goBack()}>שמירה</Main_button>
                    <Main_button onPress={() => props.navigation.goBack()}>ביטול</Main_button>
                </View>
            </Card>
        </View>
    </TouchableWithoutFeedback>

    );
};


Add_Folder.navigationOptions={
    headerTitle:'הוספת תיקייה חדשה'
  };

export default Add_Folder;