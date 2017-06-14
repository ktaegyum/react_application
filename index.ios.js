/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class project extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        days: 0,
        volume2: 0,
      }
    }

    handleOnChangeDays = (value) => {
      this.setState({
        days: value
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          DAYS PER INFUSION CYCLE
        </Text>
        <Slider
          value={this.state.volume1}
          minimumValue = {0}
          maximumValue = {31}
          onValueChange={(value)=> this.handleOnChangeDays(value)}/>
        <Text>DAYS: {this.state.days}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('project', () => project);
