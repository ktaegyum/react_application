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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import {connect} from 'react-redux';
import styles from './Style';
import SignUp from './SignUp';
import {updateRegimen} from '../actions';

class RegimenInfomation extends Component {
  static navigationOptions = {
    title: 'Regimen Infomation',
  };
  
  render() {
    const {num_treatments, days_per_infusion_cycle, start_date, updateRegimen:updateRegimentStore} = this.props;
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'}}>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,

        }}>
          <Text> DAYS PER INFUSION CYCLE </Text>
          <Slider
            value={days_per_infusion_cycle}
            minimumValue = {0}
            maximumValue = {31}
            step = {1}
            onValueChange={(value)=> updateRegimentStore('infusion', value)}/>
          <Text>DAYS: {days_per_infusion_cycle} </Text>
        </View>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginBottom: 5,
        }}>
          <Text> NUMBER OF INFUSION </Text>
          <Slider
            value={num_treatments}
            minimumValue = {0}
            maximumValue = {31}
            step = {1}
            onValueChange={(value)=> updateRegimentStore('treatment', value)}/>
          <Text>Infusion: {num_treatments} </Text>
        </View>
        <View style = {{
          height: 350, 
          borderBottomColor: 'black',
          borderBottomWidth: 2
        }}>
        <Calendar
          onDayPress={(day) => updateRegimentStore('start_date', day.dateString)}
          scrollEnabled={true}  />
        <Text>Selected Date: {start_date} </Text>  
        
        </View>
          <View style={{backgroundColor: 'antiquewhite'}}>
          <Button
            onPress={() => this.props.navigation.navigate('MainDash')}
            title="DONE"/>
        </View>
      </View>

    );
  }
}

const mapStatesToProps = ({regimen}) => {
  const {num_treatments, days_per_infusion_cycle, start_date} = regimen

  return {num_treatments, days_per_infusion_cycle, start_date}
}

export default connect(mapStatesToProps, {updateRegimen})(RegimenInfomation);