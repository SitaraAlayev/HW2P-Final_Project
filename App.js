import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation/Home_page_Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


// const fetchFont = () => {
//   return Font.loadAsync({
//     'SuezOne-Regular':require('./assets/fonts/SuezOne-Regular.ttf')
//   });
// };

export default function App()
 {
  // const [fontLoaded,setFontLoaded] =useState(false);

  // if(!fontLoaded){
  //   return (
  //   <AppLoading  startAsync={fetchFont}
  //   onFinish={()=>setFontLoaded(true)}
  //   // onErorr={(err)=>console.log(err)}
  //   />
  //   );
  // }
  return <Navigation/>;
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

