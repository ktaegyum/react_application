import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {StackNavigator} from 'react-navigation';
import styles from './Style';
import SignUp from './SignUp';
import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from '../constants.js'
import store from '../reducers/people.js'

function redux_connector(command, data) {
  return {type: command, content: data}
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

dayToUnix = (day) => {
  dateStringSlashes = day.year + "/" + day.month + "/" + day.day + " 13:00"
  unixTime = Date.parse(dateStringSlashes)
  return unixTime
}

dateHyphenToUnixtime = (day) => Date.parse(day.dateString)

export default class RegimenInfomation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      days: 0,
      infusion: 0,
      dateOfInterest: date_convertor(Date.now())
    }
  }
  static navigationOptions = {
    title: 'Regimen Infomation'
  };
  handleOnChangeDays = (value) => {
    this.setState({days: value})
  }
  handleOnChangeInfusion = (value) => {
    this.setState({infusion: value})
  }
  onDayPress(day) {
    this.setState({selected: day.dateString});
  }
  render() {
    regimenDateSelected = {
      [date_convertor(this.props.date)]: {
        selected: true,
        marked: true
      }
    }
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5
        }}>
          <Text>
            DAYS PER INFUSION CYCLE: {this.props.cycle}
          </Text>
          <Slider value={this.props.cycle} minimumValue={1} maximumValue={28} step={1} onValueChange={(value) => this.props.dispatch(redux_connector(REGIMEN_INFUSIONCYCLE, value))}/>
        </View>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5
        }}>
          <Text>
            NUMBER OF INFUSIONS: {this.props.num}
          </Text>
          <Slider value={this.props.num} minimumValue={0} maximumValue={31} step={1} onValueChange={(value) => this.props.dispatch(redux_connector(REGIMEN_INFUSIONNUM, value))}/>
        </View>
        <View style={{
          height: 350,
          borderBottomColor: 'black',
          borderBottomWidth: 2
        }}>
          <Text>
            DATE OF FIRST INFUSION
          </Text>
          <Calendar onDayPress={(calendarDayPick) => this.props.dispatch(redux_connector(REGIMEN_DATE, dayToUnix(calendarDayPick)))} markedDates={regimenDateSelected} scrollEnabled={true}/>
          <Text>Selected Date: {date_convertor(this.props.date)}
          </Text>

        </View>
        <View style={{
          backgroundColor: '#FFFFFF'
        }}>
          <Button onPress={() => {
            this.props.navigation.navigate('MainDash')
          }} title="DONE"/>
        </View>
      </View>

    );
  }
}
