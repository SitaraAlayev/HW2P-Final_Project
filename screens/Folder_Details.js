import React from 'react';
import { View,Text} from 'react-native';
import Styles from '../Styles';


const Folder_Details = (props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textstyle}> Folder Details screen</Text>
      </View>

  );
};

Folder_Details.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('folderName')
    };
  };

export default Folder_Details;