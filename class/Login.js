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
import { OVERVIEW_AVERAGEFATIGUE, OVERVIEW_AVERAGEANXIETY} from '../constants.js'
function getAverage(infusionList) {
  //update date format in 
  if(infusionList.length == 0) {
    console.log("NOTHING");
    return;
  }
  console.log("in get average");
  console.log(infusionList.length);
  for(i = 0; i < infusionList.length; i++) {
    infusionList[i].date = new Date(infusionList[i].date);
  }
  var currentDate = new Date(Date.now());
  var previnfo = infusionList[0];
  var lastIndex = 0;
  for(i = 1; i < infusionList.length; i++) {
    if(infusionList[i].date.getTime() > currentDate.getTime()) {
      break;
    }else{
      previnfo = infusionList[i];
      lastIndex = i;
    }
  }

  var diff = currentDate.getDate() - previnfo.date.getDate();
  var variable = 0;
  var fatigueSum = 0;
  var anxietySum = 0;
  for(i = 0; i < lastIndex; i++) {
    if(infusionList[i].fatigue[diff-1] != -1) {
      fatigueSum += infusionList[i].fatigue[diff-1];
      anxietySum += infusionList[i].anxiety[diff-1];
      variable++;
    }
  }
  var averageFatigue = fatigueSum / variable;
  var averageAnxiety = anxietySum / variable;
  console.log("hey")
  console.log(averageFatigue);
  console.log(variable)
  if(variable == 0) {

    store.dispatch(redux_connector(OVERVIEW_AVERAGEFATIGUE,fatigueSum))
    store.dispatch(redux_connector(OVERVIEW_AVERAGEANXIETY,anxietySum))
  }else{
    store.dispatch(redux_connector(OVERVIEW_AVERAGEFATIGUE,averageFatigue))
    store.dispatch(redux_connector(OVERVIEW_AVERAGEANXIETY,averageAnxiety))
  }
}
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
        const user = firebase.auth().currentUser;
        if (!user.emailVerified){
          alert("Please verify your email");
          return;
        }

    } catch (error) {
        console.log(error.toString())
        alert(error.toString());
    }
        getAverage(this.props.state.regimen_infusion);
        this.props.navigation.navigate('Overview');
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
    this.props.navigation.navigate('Overview')
    signUp_Update(this.email, this.password, this.information)
  }
  render() {
    return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: 40}}>
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
