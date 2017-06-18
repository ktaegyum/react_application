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
  Alert,
  Image
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import styles from './class/Style';
import SignUp from './class/SignUp'
import RegimenInfomation from './class/RegimenInfomation'
import Condition from './class/Condition'

export default class project extends Component {
  constructor(props, context) {
    super(props, context)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
      /*temp pic setting. it should be change later*/
      let pic = {
         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <View style =  {{ 
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <View>
            <Image source={pic} style={{width: 193, height: 110}}/>
          </View>
          <Button
            onPress = {() => this.props.navigation.navigate('SignUp')}
            title = "Sign Up"/>
          <Button
            onPress = {() => this.props.navigation.navigate('Condition')}
            title = "Log In W/ CancerBase"/>
        </View>
      );
  };
}
const App = StackNavigator({
  Home: { screen: project },
  SignUp: { screen: SignUp },
  RegimenInfomation: { screen: RegimenInfomation },
  Condition: {screen: Condition},
});

AppRegistry.registerComponent('project', () => App);
