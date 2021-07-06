import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


/**
 * Card to display information for each course the user is enrolled in.
 * Clickable for viewing the course.
 * @param {any} props 
 * @returns React Native Element Card
 */
const CourseCard = (props) => {
  /**
   * @todo: replace dummy information about the course with the correct data
   * @todo: link each course to a new page for the course
   * @todo: add ratings for each course
   */
  return (
    <Card>
      <Card.Title>{props.title}</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('../../public/images/logo.png')}></Card.Image>
      <Text style={{margin: 10}}>
          Course description goes here.
      </Text>
        <Button
          buttonStyle={styles.button}
          title='VIEW NOW'
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 160,
    width: 230,
  },
  button: {
    backgroundColor: 'rgb(146, 212, 57)',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0
  }
});

export default CourseCard;