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
        <View>
        <Text>TODAY IS INFUSION</Text>
        <Text>Your next treatment is Thursday of next week, on June 1st</Text>
        <Text>You have 12 infusions left</Text>
        <Text>Today's Forecast</Text>
        <Text>Some vomiting, Severe constipation, no peripheral neuropathy.</Text>
        <Text>Fatigue</Text>

        </View>
    )
  };
}
