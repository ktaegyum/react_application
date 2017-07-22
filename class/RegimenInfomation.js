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

export default class RegimenInfomation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
       days: 0,
       infusion: 0,
    }
    this.onDayPress = this.onDayPress.bind(this);

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
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
  render() {
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
          <Text> DAYS PER INFUSION CYCLE </Text>
          <Slider
            value={this.state.days}
            minimumValue = {0}
            maximumValue = {31}
            step = {1}
            onValueChange={(value)=> this.handleOnChangeDays(value)}/>
          <Text>DAYS: {this.props.test} </Text>
        </View>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,
        }}>
          <Text> NUMBER OF INFUSION </Text>
          <Slider
            value={this.state.infusion}
            minimumValue = {0}
            maximumValue = {31}
            step = {1}
            onValueChange={(value)=> this.handleOnChangeInfusion(value)}/>
          <Text>Infusion: {this.state.infusion} </Text>
        </View>
        <View style = {{
          height: 350, 
          borderBottomColor: 'black',
          borderBottomWidth: 2
        }}>
        <Calendar
          onDayPress={this.onDayPress}
          scrollEnabled={true}  />
        <Text>Selected Date: {this.state.selected} </Text>  
        
        </View>
          <View style={{backgroundColor: 'antiquewhite'}}>
          <Button
            onPress={() => this.props.navigation.navigate('MainDash')}
            title="DONE"/>
        </View>
      </View>

    );
  }
}
