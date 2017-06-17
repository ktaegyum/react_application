import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  TextInput
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import styles from './Style';
import RegimenInfomation from './RegimenInfomation'

export default class SignUp extends Component {
constructor(props, context) {
    super(props, context)
    this.state = {
       email: 0,
       password: 0,
    }
}
static navigationOptions = {
    title: 'Sign Up',
};
setEmail = (user_email) => {
	this.setState ({
		email: user_email
	})
}
setPassword = (user_password) => {
	this.setState({
		password: user_password
	})
}
render() {
    return (
      <View style={styles.container}>
      	<Text> SignUp </Text>
      	<Text> Email </Text>
      	<TextInput
      		style = {{height: 40, padding: 10}}
      		placeholder =  "account@example.com"
      		onChangeText = {(value) => this.setEmail(value)}/>
      	<Text> Password </Text>
      	<TextInput
      		style = {{height: 40, padding: 10}}
      		placeholder =  "password"
      		onChangeText = {(value) => this.setPassword(value)}/>
	    <Button
	        onPress={() => this.props.navigation.navigate('RegimenInfomation')}
	        title="DONE"/>
      </View>
    );
  }
}