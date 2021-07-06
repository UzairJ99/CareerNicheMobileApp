import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainMenu from '../headers/MainMenu';
import MyProgress from './MyProgress';

/**
 * Page with all the user's progress on job applications
 * @param {any} props 
 */
const ProgressScreen = (props) => {
    return (
        <View style={[styles.container]}>
            <MainMenu navigator={props.navigation} />
            <View style={{flex:1}}>
                <View style={[styles.headerView]}>
                    <Text style={styles.welcomeText}>MY PROGRESS</Text>
                </View>
                <MyProgress />
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
        borderBottomColor: '#dbdbdb',
        backgroundColor: '#98CE00',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProgressScreen;