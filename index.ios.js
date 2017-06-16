/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import styles from './Style';
import SignUp from './SignUp'
import RegimenInfomation from './RegimenInfomation'

export default class project extends Component {
  constructor(props, context) {
    super(props, context)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('SignUp')}
        title="Sign Up"/>
    );
  }
}

const App = StackNavigator({
  Home: { screen: project },
  SignUp: { screen: SignUp },
  RegimenInfomation: { screen: RegimenInfomation },
});
AppRegistry.registerComponent('project', () => App);
