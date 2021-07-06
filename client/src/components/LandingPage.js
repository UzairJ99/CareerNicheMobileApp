import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

const LandingPage = (props) => {
    return (
        <View style={[styles.container]}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={[styles.logo]} source={require('../public/images/logo.png')}/>
            </View>
            {/* render the correct form based on prop value */}
            { props.route.params.login ? (
            <View style={{flex:3, width: '100%', padding: 40}}>
                <LoginForm navigator={props.navigation} />
            </View>
            ) : (
                <View style={{flex:3, width: '100%', padding: 40}}>
                <RegisterForm navigator={props.navigation} />
            </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      width: '100%'
    },
    logo: {
        height: 160,
        width: 230,
        marginTop: 50
    }
});

export default LandingPage;