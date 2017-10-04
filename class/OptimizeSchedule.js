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
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';
import {ADD_SYMPTOMS, EFFECT_FATIGUE, EFFECT_NAUSEA, EFFECT_FEVER, EFFECT_PAIN, EFFECT_CLICKED_FATIGUE, EFFECT_CLICKED_NAUSEA, EFFECT_CLICKED_FEVER, EFFECT_CLICKED_PAIN} from '../constants.js'
import store from '../reducers/people.js'
import { DatePickerDialog } from 'react-native-datepicker-dialog'


//this is based on Serhan's experience. Algorithm shamelessly implemented by Brian
compute_expected_fatigue = (days_since_last_infusion, cycle_length) => {
  fractions = [0.333,0.8]
  current_fraction = days_since_last_infusion/cycle_length
  if (current_fraction < fractions[0]) {
    return(10)
  } else if (current_fraction < fractions[1]) {
    return(6)
  } else {
    return(0)
  }
}



export default class OptimizeSchedule extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
      dobDate: null,
    }
	}

  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MMM-YYYY')
    });
  }
	render() {
	    return (
		    <View style = {{
		        flex: 1,
		        flexDirection: 'column',
		        justifyContent: 'space-between',
          backgroundColor:'#e9e9ef',
        paddingTop:40}}>
	    		<ScrollView>

            <View style={{paddingLeft:10,paddingRight:10, backgroundColor:'#FFFFFF',
            alignItems:'center',
            justifyContent:'space-between',
            height:60, flex:1, flexDirection:'row'}}>
              <Text style={{fontSize:18, color:'#465f92', fontFamily:'Courier'}} onPress= {() => {
                this.props.navigation.navigate('Data')}
              }>{" <"}</Text>
		          <Text style={{fontSize:18, color:'#5774a3'}}>Optimize for Date</Text>
              <Text style={{fontSize:25, color:'#5774a3'}}>{"    "}</Text>
		        </View>



            <View style={styles.whiteCard}>
              <Text style={styles.cardHeader}>CHOOSE A DATE</Text>
              <View style={{marginTop: 10, marginBottom: 15, padding:8, borderColor:'#c2c4c5', borderRadius:1, borderWidth:2}}>
                <Text style={{fontSize:12, fontFamily:'Avenir'}}>07/30/2017</Text>

              </View>
              <Text style={{fontSize:12, fontFamily:'Avenir'}}>Based on your current schedule, you're predicted to feel <Text style={{fontWeight: "bold"}}>severely fatigued </Text>(3.7 out of 4).</Text>
            </View>


            <View style={styles.whiteCard}>
              <Text style={styles.cardHeader}>SUGGESTION</Text>
              <Text style={{fontSize:12, fontFamily:'Avenir', marginTop:15}}>
To minimize the side effects on June 29, 2017, you will need to adjust your current schedule:{"\n"}{"\n"}
You currently have an infusion scheduled for <Text style={{fontWeight: "bold"}}>May 3, 2017</Text>.{"\n"}{"\n"}
Moving your infusion to <Text style={{fontWeight: "bold"}}>May 2, 2017</Text>.</Text>
            </View>
	    		</ScrollView>
		        <View style={{backgroundColor:'#888888',
            alignItems:'center',
            justifyContent:'center',
            height:60}}>
		          <Text style={{fontSize:18, color:'#FFFFFF'}}>UPDATE REGIMEN</Text>
		        </View>
	    	</View>
	)
  };
}
