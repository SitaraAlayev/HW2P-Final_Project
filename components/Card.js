import React from 'react';
import { View } from 'react-native';
import Styles from '../Styles';

const Card = props => {
  return (
    <View style={{ ...Styles.card, ...props.style }}>{props.children}</View>
  );
};
 
  export default Card;