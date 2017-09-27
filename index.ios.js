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

// This function can be passed to the navigationOptions within StackNavigator or
// TabNavigator to remove the top header/title
let rmHeader = ({navigation}) => ({
  header: false
})

const MainDashNavigator = TabNavigator({
  Overview: {
    screen: Overview
  },
  Data: {
    screen: DataPage,
  },
  Settings: {
    screen: SettingsPage
  }
}, {
  swipeEnabled: true,
  lazy: false,
  tabBarPosition: 'top',
  navigationOptions: rmHeader,
}

);



const App = StackNavigator({
  Home: {
    screen: Project,
    navigationOptions: rmHeader,
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: rmHeader,
  },
  RegimenInfomation: {
    screen: RegimenInfomation,
    navigationOptions: rmHeader,
  },
  MainDash: {
    screen: MainDashNavigator,
    navigationOptions: rmHeader,
  },
  SideEffect: {
    screen: SideEffect,
    navigationOptions: rmHeader,
  },
  OptimizeSchedule: {
    screen: OptimizeSchedule,
    navigationOptions: rmHeader,
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: rmHeader,
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
