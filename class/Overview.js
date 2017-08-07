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

export default class Overview extends Component {
  render() {
    return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>

          <View>
          <Text>TODAY IS INFUSION</Text>
          <Text>Your next treatment is Thursday of next week, on June 1st</Text>
          <Text>You have 12 infusions left</Text>
          <Text>Todays Forecast</Text>
          <Text>Some vomiting, Severe constipation, no peripheral neuropathy.</Text>
          <Text>Fatigue</Text>
          </View>

          <View style={{backgroundColor: 'antiquewhite'}}>
            <Button
              onPress = {() => this.props.navigation.navigate('SideEffect')}
              title = "Submit"/>

          </View>
        </View>
    )
  };
}
