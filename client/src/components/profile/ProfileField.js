import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Input } from 'react-native-elements';

const ProfileField = (props) => {
  return (
    <Card containerStyle={props.type === 'grey' ? styles.grey : styles.green} >
      <Input 
        containerStyle={styles.input} 
        inputContainerStyle={styles.inputContainer} 
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChangeText={props.changeProperty}
        >
        {props.text}
      </Input>
    </Card>
  )
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 0,
    marginBottom: -25
  },
  inputContainer: {
    borderBottomColor: 'transparent'
  },
  green: {
    borderLeftColor: '#98CE00',
    borderLeftWidth: 5,
    padding: 5
  },
  grey: {
    borderLeftColor: '#6e6e6e',
    borderLeftWidth: 5,
    padding: 5
  },
});

export default ProfileField;