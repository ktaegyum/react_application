import React, { Component } from 'react';
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

export default class Overview extends Component {
  render() {
    completedInfusions = 2
    totalWidth = 300
    progressNumerator = completedInfusions
    progressDenominator = this.props.state.regimen_infusionNum
    progressWidth = totalWidth*(progressNumerator/progressDenominator)
    return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>

<View>
<Text>Infusions</Text>
<Text>Your next treatment is Thursday of next week, on June 1st</Text>
<Text>Progress</Text>
<Text>You have completed {progressNumerator}/{this.props.state.regimen_infusionCycle} infusions</Text>
<View style={{flexDirection:'row'}}>
<View style={{width:progressWidth, height:10,backgroundColor:'green'}}></View>
  <View style={{width:300, height:10,backgroundColor:'lightgrey'}}></View>
</View>
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
