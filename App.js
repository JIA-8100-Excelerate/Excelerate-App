import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 


import Login from './pages/Login';
import Register from './pages/Register';



export default createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
}, {
    initialRouteName: 'Login',
});

