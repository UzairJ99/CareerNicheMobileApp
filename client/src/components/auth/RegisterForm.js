import React, { createElement } from 'react';
import {StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as UserServices from '../../services/UserService';
import * as GurucanServices from '../../services/GurucanService';
import * as ValidationServices from '../../services/ValidationService';
import * as CONSTANTS from '../../constants/routes';

const RegisterForm = (props) => {
  /**
   * format for new user from Gurucan Webhook
   * @see {@link https://gurucan.stoplight.io/docs/gurucan-api/reference/Gurucan-webhooks.v1.yaml/paths/~1sign_up/post}
   */ 
  let initialCredentials = {
    email: '',
    password: '',
    confirmedPassword: '',
    city: '',
    birthDate: '',
  }
    
  /**
   * the state for holding user registration information
   * @param {object} credentials account information
   * @param {function} setCredentials new account information
   */
  const [credentials, setCredentials] = React.useState(initialCredentials);

  /**
   * the state for validating user registration information.
   * @param {string} validationStatus either "validated" or "not_validated"
   * @param {function} setValidationStatus updates validation status
   */
  const [validationStatus, setValidationStatus] = React.useState('not_validated');

  /**
   * Registers the user using the information provided in the form
   * @returns {void}
   * @see packageData()
   * @see createUser()
   */
  const handleSubmit = async () => {
    // ensure user has given required information correctly
    if (ValidationServices.validateInfo(credentials)) {
      // update validation status
      setValidationStatus('validated');

      // package data to process before sending to backend
      let data = await GurucanServices.packageData(credentials, validationStatus);
      
      let response = await UserServices.saveUser(data);

      clearForm();

      // login
      props.navigator.navigate(CONSTANTS.LANDING, {login: true});
 
    } else {
      /**
       * @todo change this so it sends upwards to the parent component to show an error message
       * @todo change validation so it shows unique error messages for better UX
       */
      setValidationStatus('not_validated');
    }
  }

  /**
   * Clears all input fields and resets the state.
   */
  const clearForm = () => {
    setCredentials(initialCredentials);
  }

  // registration UI form
  return (
    <Card>
      <Card.Title style={styles.registerTitle}>SIGN UP</Card.Title>
      <Card.Divider />
      <Input
        placeholder="Email"
        onChangeText={value => setCredentials({...credentials, email: value})}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={value => setCredentials({...credentials, password: value})}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={value => setCredentials({...credentials, confirmedPassword: value})}
      />
      <Input
        placeholder="City"
        onChangeText={value => setCredentials({...credentials, city: value})}
      />
      <Input
        placeholder="Birth Date"
        onChangeText={value => setCredentials({...credentials, birthDate: value})}
      />
      <Button
        buttonStyle={{backgroundColor: 'rgb(146, 212, 57)'}}
        title="Register"
        raised={true}
        onPress={() => {handleSubmit()}}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  registerTitle: {
    fontSize: 25,
    fontWeight: 'normal'
  }
});

export default RegisterForm;