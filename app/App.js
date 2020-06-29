import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text} from 'react-native';
import AppNavigator from './navigation';
import {NavigationContainer} from '@react-navigation/native';
console.disableYellowBox = true;

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 3, alignItems: 'stretch', justifyContent: 'center'}}>
      <Button title="Go to VK" onPress={() => navigation.navigate('VK')} />
    </View>
  );
}

function VKScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}} />
  );
}

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="VK" component={VKScreen} />
//     </Stack.Navigator>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}
