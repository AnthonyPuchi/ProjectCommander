import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Home from './screens/Home';
import NewSaucer from './screens/NewSaucer';
import ListSaucer from './screens/ListSaucer';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewSaucer" component={NewSaucer} />
        <Stack.Screen name="ListSaucer" component={ListSaucer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

