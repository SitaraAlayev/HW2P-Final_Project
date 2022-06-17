import React,{useState} from 'react';
import { View, Text,Platform,ScrollView, FlatList } from 'react-native';
import Styles from '../Styles'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton';

export const View_folders = (props)=>{
    return(
        <ScrollView>
            <View style={Styles.container}>
                <Text>מסך צפייה בתיקיות </Text>
            </View>
        </ScrollView>
            
    );
}
  
View_folders.navigationOptions= ({navigation}) =>{
return {
    headerTitle:'צפייה בתיקיות',
    headerRight: ()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Add' iconName={Platform.OS ==='android' ? 'md-add' :'ios-add'}
        onPress={({}) =>{navigation.navigate('Add_Folder')}}/>
    </HeaderButtons>)


};
}
export default View_folders;
