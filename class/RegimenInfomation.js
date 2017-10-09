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
import {styles} from './Style';
import SignUp from './SignUp';
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE, REGIMEN_INFUSIONLIST, REGIMEN_LASTINFUSION} from '../constants.js'
import { OVERVIEW_AVERAGEFATIGUE, OVERVIEW_AVERAGEANXIETY} from '../constants.js'
import store from '../reducers/people.js'
import { Infusion } from './Infusion.js'
var lastInfusiondate;
function createInfusion(date, cycle, days) {
    infusionList = [];
    var temp = new Date(date);
    for(let i = 0; i < cycle; i++) {
        infusionList.push(new Infusion(temp, days));
        temp.setDate(temp.getDate() + 7);
    }
    //update redux
    temp.setDate(temp.getDate() - 7);
    lastInfusiondate = temp;
    return infusionList;
}
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
    console.log(infusionList[i].fatigue[diff-1]);
    if(infusionList[i].fatigue[diff-1] != -1) {
      fatigueSum += infusionList[i].fatigue[diff-1];
      anxietySum += infusionList[i].anxiety[diff-1];
      variable++;
    }
  }
  var averageFatigue = fatigueSum / variable;
  var averageAnxiety = anxietySum / variable;
  if(variable == 0) {
    store.dispatch(redux_connector(OVERVIEW_AVERAGEFATIGUE,fatigueSum))
    store.dispatch(redux_connector(OVERVIEW_AVERAGEANXIETY,anxietySum))
  }else{
    store.dispatch(redux_connector(OVERVIEW_AVERAGEFATIGUE,averageFatigue))
    store.dispatch(redux_connector(OVERVIEW_AVERAGEANXIETY,averageAnxiety))
  }
}
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
      days: 14,
      infusion: 12,
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
    regimenDateSelected =
      {[date_convertor(this.props.date)]: {selected: true, marked: true}}
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'#ffffff',
        paddingTop:40,
        paddingRight:10,
        paddingLeft:10,
      }}>
        <View style={{
          borderBottomColor: 'black',
          marginBottom: 5
        }}>
          <Text style={styles.cardHeader}>DAYS BETWEEN INFUSIONS: <Text style={{fontWeight: "bold"}}>{this.props.cycle}</Text></Text>

          <Slider value={this.state.days} minimumValue={7} maximumValue={21} step={7} onValueChange={(value) => this.props.dispatch(redux_connector(REGIMEN_INFUSIONCYCLE, value))}/>
        </View>
        <View style={{
          marginBottom: 5
        }}>
          <Text style={styles.cardHeader}>NUMBER OF INFUSIONS <Text style={{fontWeight: "bold"}}>{this.props.num}</Text></Text>
          <Slider value={this.state.infusion} minimumValue={1} maximumValue={31} step={1} onValueChange={(value) => this.props.dispatch(redux_connector(REGIMEN_INFUSIONNUM, value))}/>
        </View>
        <View style={{
          height: 350
        }}>

            <Text style={styles.cardHeader}>FIRST INFUSION IS ON <Text style={{fontWeight: "bold", color: 'grey'}}>{date_convertor(this.props.date)}</Text></Text>

          <Calendar onDayPress={(calendarDayPick) => this.props.dispatch(redux_connector(REGIMEN_DATE, dayToUnix(calendarDayPick)))} markedDates={
            {[regimenDateSelected]: [{startingDay: true}]}
          } scrollEnabled={true}

          theme={{
             backgroundColor: '#ffffff',
             calendarBackground: '#ffffff',
             textSectionTitleColor: '#b6c1cd',
             selectedDayBackgroundColor: '#00adf5',
             selectedDayTextColor: '#ffffff',
             todayTextColor: '#00adf5',
             dayTextColor: '#2d4150',
             textDisabledColor: '#d9e1e8',
             dotColor: '#00adf5',
             selectedDotColor: '#000000',
             arrowColor: 'black',
             monthTextColor: 'black',
             textDayFontFamily: 'Avenir',
             textMonthFontFamily: 'Avenir',
             textDayHeaderFontFamily: 'Avenir',
             textDayFontSize: 10,
             textMonthFontSize: 10,
             textDayHeaderFontSize: 16
           }}
        />


        </View>
        <View style={{
          backgroundColor: '#FFFFFF'
        }}>
          <Button onPress={() => {
            this.props.dispatch(redux_connector(REGIMEN_INFUSIONLIST, createInfusion(this.props.date, this.props.cycle, this.props.num)))
            this.props.dispatch(redux_connector(REGIMEN_LASTINFUSION, lastInfusiondate))
            this.props.navigation.navigate('MainDash')
            {getAverage(this.props.state.regimen_infusion)}

          }} title="DONE"/>
        </View>
      </View>

    );
  }
}
