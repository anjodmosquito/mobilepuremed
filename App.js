import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './accounts/Register';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './dashboard/DashboardScreen';
import ReservationScreen from './screens/ReservationScreen';
import UserScreen from './screens/UserScreen'; // Create and import UserScreen
import SearchScreen from './screens/SearchScreen'; // Create and import CallScreen
import ChatScreen from './screens/ChatScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }}  // Hide the header for HomeScreen
        />
      
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
