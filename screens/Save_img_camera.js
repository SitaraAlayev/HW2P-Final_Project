import React from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import {HeaderButton} from '../components/HeaderButton';

const Save_img_camera =props =>{
    return(
        <View>
            <Text>
            Save_img_camera Screen
            </Text>
        </View>
    )
};

Save_img_camera.navigationOptions= navData => {
    return {
        headerTitle:'All Images',
        headerRight:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Add new image" iconName={Platform.OS ==='android'? "md-add" :'ios-add'}
                onPress={() =>{
                    navData.navigation.navigate('Image_picker_camera');
                }}
               />
            </HeaderButtons>
        )
    }
    
};

const style=StyleSheet.create({

});

export default Save_img_camera;
