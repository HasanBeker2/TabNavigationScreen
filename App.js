import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./Screens/WelcomeScreen";
import MenuScreen from "./Screens/MenuScreen";

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#333333' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Home',headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}