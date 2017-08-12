import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Dimensions,
  Button,
  Alert
} from 'react-native';
import PropTypes from 'prop-types'; // ES6

function range(len) {
  return Array.apply(null, {length: len}).map(Number.call, Number)
}

dayMilliseconds = (num) => 86400000 * num

//@return array of infusion dates in unixtime format
function infusionDates(startDateUnixTime, numInfusions, cycleLength) {
  return range(numInfusions).map((dayIndex) => startDateUnixTime + dayMilliseconds(dayIndex))
}

//@param array of infusion dates in unixtime format
function nextInfusion(infusionDates) {
  // remove dates in past, then return first of remaining list.
  return infusionDates.filter((infusionDate) => infusionDate < Date.now())[0]
}
//@return Date object for next infusion datetime
function nextInfusionDate(start, num, cycleLength){
  return new Date(nextInfusion(infusionDates(startDateUnixTime, numInfusions, cycleLength)))
}

const weekdayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

weekdayString = (dateObject) => weekdayName[dateObject.getDay()]

export default class Overview extends Component {
  render() {
    completedInfusions = 2
    totalWidth = 300
    progressNumerator = completedInfusions
    progressDenominator = this.props.state.regimen_infusionNum
    progressWidth = totalWidth * (progressNumerator / progressDenominator)

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>

        <View>
          <Text>Infusions</Text>
          <Text>Your next treatment is </Text>
          <Text>Progress</Text>
          <Text>You have completed {progressNumerator}/{this.props.state.regimen_infusionCycle}
            infusions</Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              width: progressWidth,
              height: 10,
              backgroundColor: 'green'
            }}></View>
            <View style={{
              width: 300,
              height: 10,
              backgroundColor: 'lightgrey'
            }}></View>
          </View>
          <Text>Todays Forecast</Text>
          <Text>Some vomiting, Severe constipation, no peripheral neuropathy.</Text>
          <Text>Fatigue</Text>

        </View>

        <View style={{
          backgroundColor: '#FFFFFF'
        }}>
          <Button onPress= {() => this.props.navigation.navigate('SideEffect')} title="Submit"/>
        </View>
      </View>
    )
  };
}
