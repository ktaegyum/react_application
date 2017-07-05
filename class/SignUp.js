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
import * as firebase from "firebase";
import styles from './Style';
import RegimenInfomation from './RegimenInfomation'

export default class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: 0,
      password: 0,
      information: null
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
  setInformation = (user_information) => {
    this.setState({
      information: user_information
    })
  }
  render() {
    return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>
        <View>
        	<Text> Email </Text>
        	<TextInput
        		style = {{height: 40, padding: 10}}
        		placeholder =  "account@example.com"
        		onChangeText = {(value) => this.setEmail(value)}/>
        	<Text> Password </Text>
        	<TextInput
        		style = {{height: 40, padding: 10}}
        		placeholder =  "password"
        		onChangeText = {(value) => this.setPassword(value)}
            secureTextEntry = {true}/>
          <Text>Additional Information</Text>
          <TextInput
            style = {{height: 300, padding: 10}}
            placeholder = "Add additional information"
            onChangeText = {(value) => this.setInformation(value)}
            multiline = {true}/>
        </View> 
	       <View style={{backgroundColor: 'antiquewhite'}}>
          <Button
            onPress={() => this.props.navigation.navigate('Condition')}
            title="DONE"/>
         </View>
      </View>
    );
  }
}
firebase.initializeApp({
    apiKey: "yourkeyhere",
    authDomain: "infusion-e7ed9.firebaseapp.com",
    databaseURL: "https://infusion-e7ed9.firebaseio.com",
    storageBucket: "infusion-e7ed9.appspot.com"
});




