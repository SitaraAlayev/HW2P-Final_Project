import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation/Home_page_Navigator';

export default function App()
 {
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

