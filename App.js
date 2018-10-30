import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Set_Goal from './pages/Set_Goal';
import Social_Action from './pages/Action/Social_Action';
import Physical_Action from './pages/Action/Physical_Action';
import Academic_Action from './pages/Action/Academic_Action';
import Cooking_Action from './pages/Action/Cooking_Action';
import Career_Action from './pages/Action/Career_Action';
import Customized_Action from './pages/Action/Customized_Action';
import Goal_Summary from './pages/Goal_Summary';
import Dashboard from './pages/Dashboard';
import View_Goals from './pages/View_Goals';
import Tasks from './pages/Tasks';
import Edit_Tasks from './pages/Edit_Tasks';

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
  Social_Action: {
    screen: Social_Action,
  },
  Physical_Action: {
    screen: Physical_Action,
  },
  Academic_Action: {
    screen: Academic_Action,
  },
  Cooking_Action: {
    screen: Cooking_Action,
  },
  Career_Action: {
    screen: Career_Action,
  },
  Customized_Action: {
    screen: Customized_Action,
  },
  Goal_Summary: {
    screen: Goal_Summary,
  },
  Dashboard: {
    screen: Dashboard,
  },
  View_Goals: {
    screen: View_Goals,
  },
  Tasks: {
    screen: Tasks,
  },
  Edit_Tasks: {
    screen: Edit_Tasks,
  },
}, {
    initialRouteName: 'Login',
    navigationOptions: {
      headerBackTitle: "Back",
    },
});
