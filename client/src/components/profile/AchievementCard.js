import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Chip } from 'react-native-elements';

const AchievementCard = (props) => {
  return (
    <Card containerStyle={styles.achievement}>
      <View style={styles.achivementView}>
        <Text style={styles.achievementText}>{props.title}</Text>
        <Chip title={props.score} buttonStyle={{ backgroundColor: '#b6eb21' }} titleStyle={{ color: 'black' }} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  achievement: {
    borderBottomColor: '#98CE00',
    borderBottomWidth: 2,
    borderTopColor: '#98CE00',
    borderTopWidth: 2,
    borderRightColor: '#6e6e6e',
    borderRightWidth: 2,
    borderLeftColor: '#6e6e6e',
    borderLeftWidth: 2,
    padding: 10,
    borderRadius: 35,
    backgroundColor: 'white',
  },
  achivementView: {
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  achievementText: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10
  }
});

export default AchievementCard;