import React from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import { ListItem } from 'react-native-elements';
import ApplicationListItem from './ApplicationListItem';

/**
 * List view of all items in the user's profile for jobs
 * @param {any} props 
 */
const MyProgress = (props) => {
  // user data on their progress with all their job applications
  let applications = [
    {
      name: 'Google',
      role: 'Frontend Developer',
      status: 'Application Submitted'
    },
    {
      name: 'EY',
      role: 'Senior Accountant',
      status: 'Awaiting Interview Response'
    },
    {
      name: 'IBM',
      role: 'Sales Intern',
      status: 'Offer Received'
    }
  ];

  return (
    // map each of the items in the list to an ApplicationListItem component
    <ScrollView style={styles.container}>
      {applications.map((app, key) => (
        <View key={key}>
          <ApplicationListItem  
            name={app.name} 
            role={app.role} 
            status={app.status}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%'
  }
});

export default MyProgress;