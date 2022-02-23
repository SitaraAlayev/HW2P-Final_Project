import React from 'react';
import { View, Image,Text } from 'react-native';
import {Main_button} from '../components/Main_button'
import Styles from '../Styles'


const Home_page = (props) =>
 {
  return (
      <View style={Styles.container}>
          <Image 
          source={require('../assets/logo_final.png')} 
          style={Styles.image} 
          resizeMode="contain"/>
          <Main_button onPress= {() =>{props.navigation.navigate('View_folders')}}>
                     צפייה בתיקיות
              </Main_button>
            <Main_button onPress= {() =>{props.navigation.navigate('Upload_image_scan')}} >
                  העלה תמונה לסריקה   
              </Main_button>
              
      </View>

  );
};
Home_page.navigationOptions={
  headerTitle:'HW2P SCANNER',
  headerStyle:{backgroundColor:'#AD67EA'},
  headerTintColor:'white'
};

export default Home_page;
