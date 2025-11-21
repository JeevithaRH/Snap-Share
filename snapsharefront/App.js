  
 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './navigation/TabNavigator';
import FullScreenImageScreen from './screens/FullScreenImageScreen';
import LoginScreen from './screens/LoginScreen'; // 👈 Make sure this file exists

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="MainTabs" component={TabNavigator} />
        <RootStack.Screen name="FullScreenImage" component={FullScreenImageScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}