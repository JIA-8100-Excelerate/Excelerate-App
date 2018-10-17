import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 


import Login from './pages/Login';
import Register from './pages/Register';
import Set_Goal_Step1 from './pages/Set_Goal_Step1';


export default createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Set_Goal_Step1: {
    screen: Set_Goal_Step1,
  },
}, {
    initialRouteName: 'Set_Goal_Step1',
});

