import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 


import Login from './pages/Login';
import Register from './pages/Register';
import Set_Goal from './pages/Set_Goal';
import Action from './pages/Action';

export default createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Set_Goal: {
    screen: Set_Goal,
  },
  Action: {
    screen: Action,
  },
}, {
    initialRouteName: 'Login',
});
