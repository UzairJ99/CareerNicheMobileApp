import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

/**
 * the three bars button on the top left corner of the screen to open the drawer
 */
const MainMenu = (props) => {
  /**
   * opens the side drawer menu when the main menu button is clicked
   * @returns {Void}
   */
  const openMenu = () => {
    props.navigator.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={{ backgroundColor: '#98CE00' }}>
      <Icon
        name="bars"
        size={25}
        color="black"
        style={{ marginLeft: 20, marginTop: 30 }}
        onPress={() => { openMenu() }}
      />
    </View>
  );
};

export default MainMenu;