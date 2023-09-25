import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from './Component/Login';
import MainScreen from './Component/MainView';
import SocialScreen from './Component/SocialView';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="MainView" component={MainScreen} />
        <Tab.Screen name="SocialView" component={SocialScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


