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
import { StackNavigator, NavigationActions } from 'react-navigation';
import * as firebase from "firebase";
import styles from './Style';
import RegimenInfomation from './RegimenInfomation'
import store from '../reducers/people.js'
import {SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_USERINFO} from '../constants.js'

function redux_connector(command,data){
  return {
    type: command,
    content: data
  }
}
function signUp_Update(email, password, info) {
    store.dispatch(redux_connector(SIGNUP_EMAIL,data));
    store.dispatch(redux_connector(SIGNUP_PASSWORD,data));
    store.dispatch(redux_connector(SIGNUP_USERINFO,data));
}
export default class LogIn extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      information: null
    }
  }
  static navigationOptions = {
      title: 'LogIn',
  };
  onPressLogin = async () => {
    try {
      const {email, password} = this.state;
      await firebase.auth()
            .signInWithEmailAndPassword(email, password);

        console.log("Logged In!");

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'RegimenInfomation'})
          ]
        })
        this.props.navigation.dispatch(resetAction)

    } catch (error) {
        console.log(error.toString())
        alert(error.toString());
    }
  }
  setEmail = (user_email) => {
  	this.setState ({
  		email: user_email
  	})
  }
  setPassword = (password) => {
  	this.setState ({
  		password
  	})
  }
  update = () => {
    this.props.navigation.navigate('Condition')
    signUp_Update(this.email, this.password, this.information) 
  }
  render() {
    return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>
        <View>
        	<Text> Email/Account </Text>
        	<TextInput
        		style = {{height: 40, padding: 10}}
        		placeholder =  "account@example.com"
            autoCapitalize="none"
            autoCorrect={false}
        		onChangeText = {(value) => this.setEmail(value)}/>
        	<Text> Password </Text>
        	<TextInput
        		style = {{height: 40, padding: 10}}
        		placeholder =  "password"
        		onChangeText = {(value) => this.setPassword(value)}
            secureTextEntry = {true}/>
        </View>
	       <View style={{backgroundColor: '#FFFFFF'}}>
          <Button
            onPress={this.onPressLogin}
            title="Submit"/>
         </View>
      </View>
    );
  }
}