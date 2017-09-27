import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';
//this.props.observations

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

function BottomButton(buttonText, pageDestination) {
  <TouchableHighlight style={{backgroundColor:'#888888',
    alignItems:'center',
    justifyContent:'center',
    height:60}} onPress= {() => {
    this.props.navigation.navigate(pageDestination)}
  }>
    <Text style={{fontSize:18, color:'#FFFFFF'}}>{buttonText}</Text>
  </TouchableHighlight>
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
            <Text style={styles.dataTitles}>
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
          <Text style={styles.dataTitles}>
            {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
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
          <Text style={styles.dataTitles}>
            {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
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
      <View style={{flex:1}}>
      <ScrollView style={{backgroundColor:'#ffffff'}}>

        <View style={{marginLeft: 10}}>

          <View style={{
            backgroundColor: '#FFFFFF'
          }}>

          </View>


        <Text style={styles.dataHeaders}>FATIGUE</Text>
          {fatigueItems}
          <Text style={styles.dataHeaders}>ANXIETY</Text>
          {anxietyItems}
          <Text style={styles.dataHeaders}>LACK OF APPETITE</Text>
          {appetiteItems}
          <Text>{JSON.stringify(this.props.observations)}</Text>
        </View>
      </ScrollView>

    
      <TouchableHighlight style={{backgroundColor:'#888888',
        alignItems:'center',
        justifyContent:'center',
        height:60}} onPress= {() => {
        this.props.navigation.navigate('OptimizeSchedule')}
      }>
        <Text style={{fontSize:18, color:'#FFFFFF'}}>OPTIMIZE SCHEDULE</Text>
      </TouchableHighlight>


    </View>
    )
  };
}
