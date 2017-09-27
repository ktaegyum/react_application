/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.ignoredYellowBox = ['Remote debugger'];
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Provider} from 'react-redux'

//Pages class
import styles from './class/Style'
import SignUp from './action_signup.js'
import LogIn from './action_login.js'
import RegimenInfomation from './action_regimentInfo'
import Overview from './action_overview'
import DataPage from './action_datapage'
import SettingsPage from './action_setting.js'
import SideEffect from './action_sideEffect.js'
import OptimizeSchedule from './action_OptimizeSchedule.js'
import Project from './action_project.js'
import * as firebase from "firebase";
//Redux Store
import store from './reducers/people.js'
import firebaseApp from './Firebase';

const MainDashNavigator = TabNavigator({
  Overview: {
    screen: Overview
  },
  Data: {
    screen: DataPage,
    //override the header at top
  },
  Settings: {
    screen: SettingsPage
  }
}, {
  swipeEnabled: true,
  lazy: false,
  tabBarPosition: 'top',
  navigationOptions: ({navigation}) => ({
    header: false
  }),
}

);

let rmHeader = ({navigation}) => ({
  header: false
})

const App = StackNavigator({
  Home: {
    screen: Project,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  RegimenInfomation: {
    screen: RegimenInfomation,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  MainDash: {
    screen: MainDashNavigator,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  SideEffect: {
    screen: SideEffect,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  OptimizeSchedule: {
    screen: OptimizeSchedule,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: ({navigation}) => ({
      header: false
    }),
  }
});
/* firebase setup
firebase.initializeApp({
    apiKey: "AIzaSyBfnermI1NQwpKOhy5FIKpJJ4Y_zZcCBJc",
    authDomain: "infusion-e7ed9.firebaseapp.com",
    databaseURL: "https://infusion-e7ed9.firebaseio.com",
    storageBucket: "infusion-e7ed9.appspot.com"
});
*/
//redux initialization
const rnredux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
//calling
AppRegistry.registerComponent('project', () => rnredux);
