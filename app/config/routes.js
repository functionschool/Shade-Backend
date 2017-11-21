import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "../views/Home";
import SecondScreen from "../views/SecondScreen";
import Register from '../views/Register';
import Login from '../views/Login';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) =>
          <Icon name="ios-umbrella-outline" size={30} color={tintColor} />
    }
  },
  Registration: {
    screen: Register,
    navigationOptions: {
      tabBarLabel: 'Sign Up',
      tabBarIcon: ({ tintColor }) =>
          <Icon name="ios-partly-sunny" size={30} color={tintColor} />
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: "#ffb6c1",
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 12,
      padding: 0
    }
  }
});

Tabs.navigationOptions = {
  title: "Tab Example Tab Navigator"
};
