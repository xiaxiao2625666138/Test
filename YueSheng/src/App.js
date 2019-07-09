/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import CreateScreen from './pages/create/CreateScreen'
import HomeScreen from './pages/home/HomeScreen'
import RecommendScreen from './pages/recommend/RecommendScreen'
import OtherScreen from './pages/other/OtherScreen'
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HomeStack=createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
        headerMode:'none'
    }
);

const RecommendStack=createStackNavigator(
    {
      Recommend: RecommendScreen,
    },
    {
        headerMode:'none'
    }
);

const CreateStack=createStackNavigator(
    {
      Create: CreateScreen,
    },
    {
        headerMode:'none'
    }
)
const OtherDrower=createDrawerNavigator(
    {
        Other:OtherScreen,
    },

    {
        drawerLockMode: 'unlocked'
    }
)

const TabNavigator=createMaterialTopTabNavigator(
    {
      Home: HomeStack,
      Recommend: RecommendStack,
      Create: CreateStack,
    },
    {
        initialRouteName:'Home',
        defaultNavigationOptions: ({ navigation }) => ({
        }),
        tabBarOptions:{
            style:{
                backgroundColor:'#f4511e',
                height:50,
            },
            inactiveTintColor:'#cfcfcf',
            indicatorStyle:{
                backgroundColor:'#13c5ff',
            },
            upperCaseLabel:false,
        },
    }
);

const AppNavigator=createDrawerNavigator(
    {
        TabNavigator: TabNavigator,
        Other:OtherDrower,
    },
    {
        initialRouteName: 'TabNavigator',
        drawerLockMode: 'unlocked',
        drawerWidth: 250
    }
)


const AppContainer=createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
