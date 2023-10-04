// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RegistroScreen from './registro';
import VerListaScreen from './verLista';
import PresentacionScreen from './presentacion';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="VerLista" component={VerListaScreen} />
        <Stack.Screen name="Presentacion" component={PresentacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

