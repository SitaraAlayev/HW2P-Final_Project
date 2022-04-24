import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import Navigation from './Navigation/Home_page_Navigator';


export default function App()
 {
  return (
          <Navigation/>
      ); 
    
      {/* <Provider store={store}> */}
     
        {/* </Provider> */}
     


    
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});

