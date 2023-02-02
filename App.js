import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from "./Screens/WelcomeScreen";
import MenuScreen from "./Screens/MenuScreen";

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return <Image source={require('./img/logo.png')}
    style={
      {
        height: 50,
        width: 320,
        resizeMode: 'contain',
        alignSelf:'center'
      }
    } />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
     <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
