import React from 'react';
import * as CONSTANTS from '../../constants/routes';
// navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
// components
import Home from './Home';
import LandingPage from '../LandingPage';
import Profile from '../profile/Profile';
import ProgressScreen from '../progress/ProgressScreen';
import DrawerContent from '../DrawerContent';
import { StyleSheet } from 'react-native';
import { DarkTheme } from '@react-navigation/native';
import Settings from '../Settings';
import Context from '../auth/context';

const Drawer = createDrawerNavigator();

/**
 * The drawer navigator for when the user is logged in.
 * Helps switch between pages from the sidebar menu.
 * @param {any} props 
 * @returns 
 */
const HomeDrawer = (props) => {
  return (
    <Context.Consumer>
      {context => (
      <Drawer.Navigator theme={ DarkTheme } initialRouteName={CONSTANTS.HOME} drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen 
          name={CONSTANTS.HOME}
          component={Home}
          initialParams={{user: null}}
        />
        <Drawer.Screen
          name={CONSTANTS.PROGRESS}
          component={ProgressScreen}
        />
        <Drawer.Screen
          name={CONSTANTS.PROFILE}
          component={Profile}
          initialParams={{user: context.id}}
        />
        <Drawer.Screen 
          name={CONSTANTS.SETTINGS}
          component={Settings}
        />
      </Drawer.Navigator>
      )}
    </Context.Consumer>
  )
}

export default HomeDrawer;