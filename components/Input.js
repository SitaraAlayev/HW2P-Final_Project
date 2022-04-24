import React from "react";
import { TextInput } from "react-native";
import Styles from '../Styles';

const Input = props => {
    return <TextInput {...props} style={{...Styles.inputText,...props.style}}/>;
};




export default Input;