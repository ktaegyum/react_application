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
        infusion: 0,
      }
    }

    handleOnChangeDays = (value) => {
      this.setState({
        days: value
      })
    }
    handleOnChangeInfusion = (value) => {
      this.setState({
        infusion: value
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,
        }}>
          <Text>
            DAYS PER INFUSION CYCLE
          </Text>
          <Slider
            value={this.state.days}
            minimumValue = {0}
            maximumValue = {31}
            onValueChange={(value)=> this.handleOnChangeDays(value)}/>
          <Text>DAYS: {this.state.days}</Text>
        </View>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,
        }}>
          <Text>
            NUMBER OF INFUSION          
          </Text>
          <Slider
            value={this.state.infusion}
            minimumValue = {0}
            maximumValue = {31}
            onValueChange={(value)=> this.handleOnChangeInfusion(value)}/>
          <Text>Infusion: {this.state.infusion}</Text>
        </View>
        <View>
        </View>
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
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
