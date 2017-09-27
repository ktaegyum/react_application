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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';
import {ADD_SYMPTOMS, EFFECT_FATIGUE, EFFECT_NAUSEA, EFFECT_FEVER, EFFECT_PAIN, EFFECT_CLICKED_FATIGUE, EFFECT_CLICKED_NAUSEA, EFFECT_CLICKED_FEVER, EFFECT_CLICKED_PAIN} from '../constants.js'
import store from '../reducers/people.js'
var radio_props = [
  {label: '0', value: 0 },
  {label: '1', value: 1 },
  {label: '2', value: 2 },
  {label: '3', value: 3 },
  {label: '4', value: 4 },
];
function redux_connector(command,data){
  return {
    type: command,
    content: data
  }
}
function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}
function redux_dispatcher(type, value) {
	if(type == 'fatigue') {
		store.dispatch(redux_connector(EFFECT_FATIGUE,value));
		store.dispatch(redux_connector(EFFECT_CLICKED_FATIGUE,value));
	}else if(type == 'nausea') {
		store.dispatch(redux_connector(EFFECT_NAUSEA,value));
		store.dispatch(redux_connector(EFFECT_CLICKED_NAUSEA,value));
	}else if(type == 'fever') {
		store.dispatch(redux_connector(EFFECT_FEVER,value));
		store.dispatch(redux_connector(EFFECT_CLICKED_FEVER,value));
	}else if(type == 'pain') {
		store.dispatch(redux_connector(EFFECT_PAIN,value));
		store.dispatch(redux_connector(EFFECT_CLICKED_PAIN,value));
	}
}
function Symptom_Constructor(fatigue, nausea, fever, pain) {
	var date = Date.now();
	return {
		date: date,
		fatigue: fatigue,
		nausea: nausea,
		fever: fever,
		pain: pain,
	}
}
function addSymptoms(fatigue, nausea, fever, pain) {
	store.dispatch(redux_connector(ADD_SYMPTOMS,Symptom_Constructor(fatigue, nausea, fever, pain)));
  //reset vals
	store.dispatch(redux_connector(EFFECT_CLICKED_FATIGUE,1));
	store.dispatch(redux_connector(EFFECT_CLICKED_NAUSEA,0));
	store.dispatch(redux_connector(EFFECT_CLICKED_FEVER,0));
	store.dispatch(redux_connector(EFFECT_CLICKED_PAIN,0));
}
var fatigue0 = "No fatigue"
var fatigue1 = "Fatigue relieved by rest"
var fatigue2 = "Fatigue not relieved by rest; limiting instrucmental ADL"
var fatigue3 = "Fatigue not relieved by rest, limiting self casr ADL"
var fatigue4 = ""

var nausea0 = "No nausea"
var nausea1 = "Loss of appetite without alteration in eating habits"
var nausea2 = "Oral intake decreased without significant weight loss, dehydration or malnutrition"
var nausea3 = "Inadequate oral caloric or fluid intake; tube feeding"
var nausea4 = ""

var fever0 = "No fever"
var fever1 = "38.0 - 39.0 degrees C (100.4 - 102.2 degrees F)"
var fever2 = ">39.0 - 40.0 degrees C (102.3 - 104.0 degrees F)"
var fever3 = ">39.0 - 40.0 degrees C (102.3 - 104.0 degrees F)"
var fever4 = ">40.0 degrees C (>104.0 degrees F) for <=24 hrs"

var pain0 = "No pain"
var pain1 = "Mild pain"
var pain2 = "Moderate pain; limiting instrucmental ADL"
var pain3 = "Severe pain; limiting self care ADL"
var pain4 = ""


export default class OptimizeSchedule extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
		}
	}
	static navigationOptions = {
    	title: 'Optimize Schedule',
	};
	render() {
	    return (
		    <View style = {{
		        flex: 1,
		        flexDirection: 'column',
		        justifyContent: 'space-between',
          backgroundColor:'#e9e9ef',
        paddingTop:40}}>
	    		<ScrollView>
	    			<Text>brian</Text>


            <View style={{margin:10, padding:20, backgroundColor:'white'}}>
              <Text style={{fontSize:16, fontFamily:'Avenir', color: '#5774a3', fontWeight:'bold'}}>CHOOSE A DATE</Text>
              <View style={{marginTop: 10, marginBottom: 15, padding:8, borderColor:'#c2c4c5', borderRadius:1, borderWidth:2}}>
                <Text style={{fontSize:12, fontFamily:'Avenir'}}>07/30/2017</Text>
              </View>
              <Text style={{fontSize:12, fontFamily:'Avenir'}}>Based on your current schedule, you're predicted to feel <Text style={{fontWeight: "bold"}}>severely fatigued </Text>(3.7 out of 4).</Text>
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
