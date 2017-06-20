import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import styles from './Style';
import RegimenInfomation from './RegimenInfomation'
import SignUp from './SignUp';

export default class Condition extends Component {
constructor(props, context) {
    super(props, context)
    this.state = {
      EULA: 0,
      Condition: 0,
    }
}
static navigationOptions = {
    title: 'Condition',
};
setEula = (user_eula) => {
  this.setState ({
    EULA: user_eula
  })
}
setCondition = (user_condition) => {
	this.setState ({
		Condition: user_condition
	})
}
render() {
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'}}>
        
        <ScrollView style = {styles.container}>
        	<Text> EULA & TERMS </Text>
        	<Text> {styles.EULA} </Text>
        </ScrollView>
        <View style={{backgroundColor: 'antiquewhite'}}>
          <Button
              onPress={() => this.props.navigation.navigate('RegimenInfomation')}
              title="DONE"
              color="#841584"/>
        </View>
      </View>

    );
  }
}