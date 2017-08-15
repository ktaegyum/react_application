import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  ScrollView
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';

//infusion_date : array, past_symtpoms : array, date_of_interests: unixtimeof(new Data(), 
// date_of_interests : user can specify the date that they want to know the pain level date.

function computeExpectedAnxiety(infusion_date, past_symtpoms, days_after_infusion) {
    //creating array (key: infusion_date, value: number of element);
    //past symtpoms (fatigue, nausea, fever, pain);
    //date of interest
    //it returns the array(key: pain, value : array of average pain)
    //TODO, we need to know what day of the week 'days_after_infusion' is 
    //
    this.props.state.symptom_observations.map(function(entry_datetime, i){
      
           
    }
};




function DateAndBar(day, width) {
  return (
    <View style={{
      flexDirection: 'row'
    }}>
      <View style ={{
        marginRight: 5
      }}>
        <Text>{day}:</Text>
      </View>
      <View style={{
        width: width,
        height: 10,
        backgroundColor: 'blue',
        marginTop: 4
      }}/>
    </View>
  )
}

export default class DataPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  };
  render() {
    const daysOfWeek = [
      "U",
      "M",
      "T",
      "W",
      "R",
      "F",
      "S"
    ]

    const fatigueItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.fatigue
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
            <Text style={{fontFamily:'courier', fontSize: 9}}>
              {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
            </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#bfa4e8',
            marginTop: 4
          }}/>
        </View>
      )
    });

    const anxietyItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.anxiety
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
            <Text style={{fontFamily:'courier', fontSize: 9}}>
              {daysOfWeek[dayIndexOfWeek]}:
            </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#a4e8db',
            marginTop: 4
          }}/>
        </View>
      )
    });

    const appetiteItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.lack_of_appetite
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
            <Text style={{fontFamily:'courier', fontSize: 9}}>
              {daysOfWeek[dayIndexOfWeek]}:
            </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#a4bee8',
            marginTop: 4
          }}/>
        </View>
      )
    });

    return (
      <ScrollView>
        <Text style={{fontSize:25}}>FATIGUE</Text>

        <View style={{
          marginLeft: 10
        }}>
          {fatigueItems}
          <Text style={{fontSize:25}}>Anxiety</Text>
          {anxietyItems}
          <Text style={{fontSize:25}}>Lack of Appetite</Text>
          {appetiteItems}
          <Text>{JSON.stringify(this.props.observations)}</Text>
        </View>
      </ScrollView>
    )
  };
}
