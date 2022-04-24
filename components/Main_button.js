import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from '../Styles';

export const Main_button = (props) =>
 {
  return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...Styles.containerButton, ...props.style}}>
            <Text style={Styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>

  );
}

export default Main_button;

