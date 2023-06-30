import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewSaucer from './component/NewSaucer';

import React from 'react';
import Home from './component/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewSaucer" component={NewSaucer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
