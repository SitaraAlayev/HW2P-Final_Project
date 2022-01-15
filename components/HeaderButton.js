import react from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';

const HeaderButton = props =>{
    return (
    <HeaderButton
     {...props} 
      IconComponent={Ionicons}
      iconSize={23} 
      color={ Platform.OS ==='android' ? '#AD67EA' : '#AD67EA' }

    />
    );
};
export default HeaderButton;