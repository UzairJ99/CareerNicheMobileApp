import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import * as CONSTANTS from '../../constants/routes';
// services
import { loginUser } from '../../services/GurucanService';
import { findUser } from '../../services/UserService';
// state flows
import Context from '../auth/context';

const LoginForm = (props) => {
  let initialCredentials = {
    email: '',
    password: ''
  }

  /**
   * the state for holding user login information
   * @param {object} credentials username and password
   * @param {object} setCredentials new username or new password
   */
  const [credentials, setCredentials] = React.useState(initialCredentials);
  
  /**
   * logs the user into their account through gurucan when they press submit
   * @returns {void}
   */
  const handleSubmit = async (context) => {
    // check both fields have been entered by the user
    if (!(credentials.email && credentials.password)) {
      console.log("invalid login attempt");
    }

    let data = credentials;

    // check if user exists in GuruCan
    var userInfo = await findUser(data);
    
    if (userInfo.isValid) {
      // set app state to have an authenticated user at all times until logged out
      try {
        context.loginUser(credentials.email, userInfo.userID);
        console.log(`user: ${userInfo.userID}`);
      } catch (err) {
        console.log(err);
      } 
      props.navigator.navigate(CONSTANTS.HOME, {
        screen: 'Home',
        params: {
          screen: 'Home',
          params: {
            user: userInfo.userID
          }
        }
      });
    }
  }

  // login UI form
  return (
    <Card>
      <Card.Title style={styles.loginTitle}>LOGIN</Card.Title>
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
      <Context.Consumer>
      { context => (
        <Button
          buttonStyle={{backgroundColor: 'rgb(146, 212, 57)'}}
          title="Submit"
          raised={true}
          onPress={() => {handleSubmit(context)}}
        />
      )}
      </Context.Consumer>
      <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
        <Text>Don't have an account? Sign up below!</Text>
      </View>
      <Button
        titleStyle={{color: 'rgb(146, 212, 57)'}}
        buttonStyle={{borderColor: 'rgb(146, 212, 57)'}}
        title="Register"
        type="outline"
        onPress={()=> {props.navigator.navigate(CONSTANTS.REGISTER)}}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 25,
    fontWeight: 'normal'
  }
});

export default LoginForm;