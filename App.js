import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserScreen from './screens/UserScreen'; // Create and import UserScreen
import SearchScreen from './screens/SearchScreen'; // Create and import CallScreen
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Search" component={SearchScreen} /> 
        <Stack.Screen name="Chat" component={ChatScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
