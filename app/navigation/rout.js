import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import * as routName from './routName';
import VK from '../screen/VK';
import Translator from '../screen/Translator';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';

const Stack = createStackNavigator();

function returnMyRoot() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Translator">
        <Stack.Screen
          name={routName.Translator}
          component={props => {
            return <Translator {...props} />;
          }}
        />
        <Stack.Screen
          name={routName.VK}
          component={(props) => {
            return <VK {...props} />;
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default returnMyRoot;