import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';
//this.props.observations

function DateAndBar(day,width) {
  console.log(day)
  console.log(width)
  return(
    <View style={{flexDirection: 'row'}}>
      <View style ={{marginRight: 5}}><Text>{day}:</Text></View>
      <View style={{width: width, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
    </View>
  )
}
export default class DataPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  };
  render() {
    const listItems = this.props.observations.map((ob) =>{
      dateTimeOfObservation = new Date(Date.parse(ob.entry_datetime))
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      return(
            <View style={{flexDirection: 'row'}}>
              <View style ={{marginRight: 5}}>
                <Text>
                  {["M","T","W","R","F","S","U"][dayIndexOfWeek]}:
                </Text>
              </View>
              <View style={{width: 80, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
            </View>
      )}
    );
    return (
      <ScrollView>
        <Text>Fatigue</Text>

        <View>
          {listItems}
        </View>
      </ScrollView>
    )
  };
}
