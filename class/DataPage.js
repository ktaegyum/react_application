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
          <Text>MIN(Fatigue)</Text>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>M :</Text></View>
            <View style={{width: 50, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>T  :</Text></View>
            <View style={{width: 60, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>W :</Text></View>
            <View style={{width: 10, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>R  :</Text></View>
            <View style={{width: 70, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>F  :</Text></View>
            <View style={{width: 10, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style ={{marginRight: 5}}><Text>S  :</Text></View>
            <View style={{width: 100, height: 10, backgroundColor: 'blue', marginTop: 4 }} />
          </View>
        </View>
      </View>
    )
  };
}