import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainMenu from '../headers/MainMenu';
import HomeFeed from './HomeFeed';
import Context from '../auth/context';

/**
 * Home page of application with main feed
 * @param {any} props 
 */
const Home = (props) => {
  return (
    <View style={[styles.container]}>
      <MainMenu navigator={props.navigation} />
      <View style={{ flex: 1 }}>
        <View style={[styles.headerView]}>
          <Text style={styles.welcomeText}>HOME PAGE</Text>
        </View>
        <Context.Consumer>
          {context => (
            <HomeFeed contextAPI={context} user={props.route.params.user} />
          )}
        </Context.Consumer>
        
      </View>
    </View>
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
    marginTop: -30
  },
  headerView: {
    borderBottomWidth: 1,
    backgroundColor: '#98CE00',
    borderBottomColor: '#dbdbdb',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;