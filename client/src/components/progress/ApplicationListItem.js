import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ListItem } from 'react-native-elements';
// import { ProgressCircle } from 'react-native-svg-charts';
import ProgressCircleExample from './ProgressCircle';

/**
 * Component holding the specific job application info
 * @param {any} props includes a company name, role, and the users progress
 */
const ApplicationListItem = (props) => {
  // state for drop down menu
  const [expanded, setExpanded] = React.useState(false);

  return (
    <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              
              <ListItem.Title style={styles.companyName}>{props.name}</ListItem.Title>
              <ListItem.Subtitle>{props.role}</ListItem.Subtitle>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        bottomDivider
      >
      <View style={styles.content}>
          <ListItem  bottomDivider>
          <ListItem.Content >
            <ListItem.Title style={styles.status}>          
              Status: {props.status}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
          </ListItem>
      </View>
      
    </ListItem.Accordion>
  );
};

const styles = StyleSheet.create({
  companyName: {
    fontSize: 20,
    fontWeight: '500'
  },
  status: {
    fontSize: 16,
    fontWeight: '300',
  },
  content: {
    // backgroundColor: 'red'
  }
});

export default ApplicationListItem;