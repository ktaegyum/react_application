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
        volume: 0,

      }
    }

    handleOnChange = (value) => {
      this.setState({
        volume: value
      })
    }
  render() {
    let { volume } = this.state
    return (
      <View style={styles.container}>
        <Text>
          DAYS PER INFUSION CYCLE
        </Text>
        <Slider
          value={this.state.value}
          minimumValue = {0}
          maximumValue = {31}
          onValueChange={(value)=> this.setState({value})}/>
        <Text>Value: {this.state.value}</Text>
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
