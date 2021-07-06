import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import MainMenu from './headers/MainMenu';
// state flows
import Context from './auth/context';

const Settings = (props) => {
  return (
    <Context.Consumer>
    {context => (
      <View style={[styles.container]}>
        <MainMenu navigator={props.navigation} />
        <View style={{flex:1}}>
          <View style={[styles.headerView]}>
            <Text style={styles.welcomeText}>SETTINGS</Text>
          </View>
          <Card>
            <Card.Title>Settings</Card.Title>
          </Card>
        </View>
      </View>
    )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    width: '100%'
  },
  welcomeText: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: -30,
  },
  label: {
    fontSize: 20,
    marginLeft: 10
  },
  headerView: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#98CE00',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Settings;