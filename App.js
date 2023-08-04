import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Home from './screens/Home';
import NewSaucer from './screens/NewSaucer';
import NewMeats from './screens/NewMeats';
import ListSaucer from './screens/ListSaucer';
import Order from './screens/Order';
import ListPortions from './screens/ListPortions';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewMeats" component={NewMeats} />
        <Stack.Screen name="NewSaucer" component={NewSaucer} />
        <Stack.Screen name="ListSaucer" component={ListSaucer} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="ListPortions" component={ListPortions} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


