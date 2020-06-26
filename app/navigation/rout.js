import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import React from 'react';
import {VK} from './routName';
import {Translator} from './routName';

const Stack = createStackNavigator(
  {
    [VK]: <VK />,
    [Translator]: <Translator />,
  },
  {},
);

export default createAppContainer(Stack);
