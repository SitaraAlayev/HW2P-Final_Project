import React,{useState} from 'react';
import { View, Text,Platform,ScrollView, FlatList } from 'react-native';
import Styles from '../Styles'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Add_Folder from '../components/Add_Folder';

const View_folders = props =>{
    return(
            <View style={Styles.container}>
                
                <Text>מסך צפייה בתיקיות </Text>
            </View>
    );
}
  
View_folders.navigationOptions= navDate =>{
return {
    headerTitle:'צפייה בתיקיות',
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Add' iconName={Platform.OS ==='android' ? 'md-add' :'ios-add'}
        onPress ={() =>{}}/>
    </HeaderButtons>)


};
}
export default View_folders;
