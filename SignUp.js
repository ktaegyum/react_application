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
import RegimenInfomation from './RegimenInfomation'

export default class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
  }
  static navigationOptions = {
    title: 'Sign Up',
  };
render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('RegimenInfomation')}
        title="DONE"/>
    );
  }
}