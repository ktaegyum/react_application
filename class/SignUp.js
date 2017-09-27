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
import store from '../reducers/people.js'
import {SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_USERINFO} from '../constants.js'
import * as firebase from "firebase";

function redux_connector(command,data){
  console.log(data);
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
export default class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: null,
      password: null,
      information: null,
      confirm_password: null,
    }
  }
  static navigationOptions = {
      title: 'Sign Up',
  };
  setEmail = (email) => {
  	this.setState ({
  		email
  	})
  }
  setPassword = (password) => {
  	this.setState({
  		password
  	})
  }
  setConfirmPassword = (confirm_password) => {
  	this.setState({
  		confirm_password
  	})
  }
  setInformation = (information) => {
    this.setState({
      information
    })
  }

  singupUser = async () => {
    const {email, password, confirm_password, information} = this.state;
    if (password != confirm_password) {
      alert('Password does not match');
      return;
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

        const user = firebase.auth().currentUser;
        console.log(user);
        await user.sendEmailVerification();
        this.setState({
          email: null,
          password: null,
          confirm_password: null,
          information: null,
        });
        this.props.navigation.navigate('Overview');
        firebase.auth().signOut();
        alert("Check your email and verify your account");
        this.props.navigation.navigate('RegimenInfomation')
    } catch (error) {
      alert(error.toString());
    }

  }

  update = () => {
    this.props.navigation.navigate('Overview')
    signUp_Update(this.email, this.password, this.information)
  }
  render() {
    const {email, password, confirm_password, information} = this.state;
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
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
        		onChangeText = {(value) => this.setEmail(value)}
            keyboardType = 'email-address'/>
        	<Text> Password </Text>
        	<TextInput
        		style = {{height: 40, padding: 10}}
        		placeholder =  "password"
        		onChangeText = {(value) => this.setPassword(value)}
            value={password}
            secureTextEntry = {true}/>
          <Text> Confirm Password </Text>
          <TextInput
            style = {{height: 40, padding: 10}}
            placeholder =  "confirm password"
            onChangeText = {(value) => this.setConfirmPassword(value)}
            value={confirm_password}
            secureTextEntry = {true}/>
        </View>
	       <View style={{backgroundColor: '#FFFFFF'}}>
          <Button
            onPress={this.singupUser}
            title="DONE"/>
         </View>
      </View>
    );
  }
}
