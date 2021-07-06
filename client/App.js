import 'react-native-gesture-handler'; // must be very first import
import React from 'react';
import { Text } from 'react-native';
// components
import LandingPage from './src/components/LandingPage';
import HomeDrawer from './src/components/home/HomeDrawer';
import GlobalState from './src/components/auth/GlobalState';
import Context from './src/components/auth/context';

// navigation tools
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as CONSTANTS from './src/constants/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    // router page navigation
    <GlobalState>
      <Context.Consumer>
       { context => (
        <NavigationContainer>
          <Stack.Navigator>
            { context.user ? (
              <>
                <Stack.Screen
                  // the home screen has it's own drawer navigation
                  name={CONSTANTS.HOME}
                  component={HomeDrawer}
                  initialParams={{user: null}}
                  options={{ headerShown: null, animationTypeForReplace: 'pop' }}
                />
              </>
            ) : (
              <>
                <Stack.Screen 
                  name={CONSTANTS.LANDING}
                  component={LandingPage}
                  initialParams={{login: true}}
                  options={{ headerShown: null, animationTypeForReplace: 'pop' }}
                />
                <Stack.Screen 
                  name={CONSTANTS.REGISTER}
                  initialParams={{login: false}}
                  component={LandingPage}
                  options={{ headerShown: null, animationTypeForReplace: 'pop' }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
       )}
      </Context.Consumer>
    </GlobalState>

    
  );
};

