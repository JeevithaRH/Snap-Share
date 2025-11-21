 
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UploadScreen from '../screens/UploadScreen';
import FormScreen from '../screens/FormScreen.js';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const UploadStack = createNativeStackNavigator();

function UploadStackScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="UploadMain" component={UploadScreen} options={{ title: 'Upload' }} />
      <UploadStack.Screen name="Form" component={FormScreen} options={{ title: 'Create Form' }} />
    </UploadStack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Upload') iconName = 'plus-circle';
          else if (route.name === 'Profile') iconName = 'user';

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#080808ff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={UploadStackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
 