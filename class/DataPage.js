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
    return (
      <View>
        <View style>
        <Text>Fatigue</Text>
        {DateAndBar("M",80)}
        {DateAndBar("M",20)}
        {DateAndBar("M",50)}
        {DateAndBar("M",100)}
        {DateAndBar("M",10)}
        </View>
      </View>
    )
  };
}
