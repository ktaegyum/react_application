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
import SignUp from './SignUp';
import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from '../constants.js'
import store from '../reducers/people.js'

function redux_connector(command,data){
  return {
    type: command,
    content: data
  }
}
function date_convertor(unix_timestamp) {
  var t = new Date(unix_timestamp);
  var year = t.getFullYear();
  var month = t.getMonth() + 1;
  var date = t.getDate();
  // month needs +1 because it is 0 indexed
  var formatted = year + "-" + month + "-" + date;
  return formatted
}
export default class RegimenInfomation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
       days: 0,
       infusion: 0,
    }
  }
  static navigationOptions = {
    title: 'Regimen Infomation',
  };
  handleOnChangeDays = (value) => {
    this.setState({
       days: value,
    })
  }
  handleOnChangeInfusion = (value) => {
    this.setState({
        infusion: value
    })
  }
  render() {
    selectedDate = new Date(this.props.date)
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'}}>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,

        }}>
          <Text> DAYS PER INFUSION CYCLE: {this.props.cycle} </Text>
          <Slider
            value={this.props.cycle}
            minimumValue = {1}
            maximumValue = {28}
            step = {1}
            onValueChange={(value) => store.dispatch(redux_connector(REGIMEN_INFUSIONCYCLE,value))}/>
        </View>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,
        }}>
          <Text> NUMBER OF INFUSIONS: {this.props.num} </Text>
          <Slider
            value={this.props.num}
            minimumValue = {0}
            maximumValue = {31}
            step = {1}
            onValueChange={(value)=> store.dispatch(redux_connector(REGIMEN_INFUSIONNUM,value))}/>
        </View>
        <View style = {{
          height: 350,
          borderBottomColor: 'black',
          borderBottomWidth: 2
        }}>
        <Calendar
          onDayPress={(day) => {console.log("day is: ",day); store.dispatch(redux_connector(REGIMEN_DATE,day.dateString))}}
          scrollEnabled={true}  />
        <Text>Selected Date: {selectedDate.toDateString()} </Text>

        </View>
          <View style={{backgroundColor: '#FFFFFF'}}>
          <Button
            onPress={() => this.props.navigation.navigate('MainDash')}
            title="DONE"/>
        </View>
      </View>

    );
  }
}
