import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import Navigation from './Navigation/Home_page_Navigator';


export default function App()
 {
  return (<Navigation/>); 


    
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
