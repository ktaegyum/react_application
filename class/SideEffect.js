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
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';
import {ADD_SYMPTOMS, EFFECT_FATIGUE, EFFECT_ANXIETY, EFFECT_CLICKED_FATIGUE, EFFECT_CLICKED_ANXIETY} from '../constants.js'
import store from '../reducers/people.js'
var radio_props = [
  {label: '0', value: 0 },
  {label: '1', value: 1 },
  {label: '2', value: 2 },
  {label: '3', value: 3 },
  {label: '4', value: 4 },
];
function addSymptom(date, fatigue, anxiety) {
	//TODO: calculate date differences
	//
}
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
	}else if(type == 'anxiety') {
		store.dispatch(redux_connector(EFFECT_PAIN,value));
		store.dispatch(redux_connector(EFFECT_CLICKED_ANXIETY,value));
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
	store.dispatch(redux_connector(EFFECT_CLICKED_ANXIETY,0));
}
function date_convertor(unix_timestamp) {
  var t = new Date(unix_timestamp);
  var year = t.getFullYear();
  var month = t.getMonth() + 1;
  var date = t.getDate();
  // month needs +1 because it is 0 indexed
  var formatted = year + "-" + month + "-" + date;
  return formatted
}
var fatigue0 = "No fatigue"
var fatigue1 = "Fatigue relieved by rest"
var fatigue2 = "Fatigue not relieved by rest; limiting instrucmental ADL"
var fatigue3 = "Fatigue not relieved by rest, limiting self casr ADL"
var fatigue4 = ""

var pain0 = "No pain"
var pain1 = "Mild pain"
var pain2 = "Moderate pain; limiting instrucmental ADL"
var pain3 = "Severe pain; limiting self care ADL"
var pain4 = ""


export default class SideEffect extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isDateTimePickerVisible: false,
			buttonMessage: "Last Infusion Date: None"
		}
	}
	static navigationOptions = {
    	title: 'Side Effect',
	};
	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
	_handleDatePicked = (date) => {
		var date_string = "Last Infusion Date: "+ date_convertor(date)
		this.props.last_infusion = date;
	    this.state = {
	    	buttonMessage : date_string
	    }
	    this._hideDateTimePicker();
  	};
	render() {
	    return (
		    <View style = {{
		        flex: 1,
		        flexDirection: 'column',

          backgroundColor:'#e9e9ef'}}>

        <View style={{paddingLeft:10,paddingRight:10, backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20, height:60, flexDirection:'row', marginBottom:10}}>
          <Text style={{fontSize:18, color:'#465f92', fontFamily:'Courier'}} onPress= {() => {
            this.props.navigation.navigate('Overview')}
          }>{" <"}</Text>
          <Text style={{fontSize:18, color:'#5774a3'}}>Log Side Effects</Text>
          <Text style={{fontSize:25, color:'#5774a3'}}>{"    "}</Text>
        </View>


	    		<ScrollView>
	    			<View style={{paddingRight:20, paddingLeft:12}}>
	    				<Text style={styles.cardHeader}>FATIGUE</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {styles.radio}
	          				onPress = {(value) => redux_dispatcher('fatigue', value)}
							formHorizontal={true}
							labelHorizontal={false}
							// buttonColor={'#99999'}
							isSelected = {false}
							buttonWrapStyle={{marginLeft: 100}}/>

						{renderIf(this.props.fatigue_isClicked,
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fatigue0}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fatigue1}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fatigue2}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fatigue3}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fatigue4}</Text></View>
						</View>
						)}

						<Text style={styles.cardHeader}>PAIN</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> redux_dispatcher('anxiety', value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'}
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.props.anxiety_isClicked,
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{pain0}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{pain1}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{pain2}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{pain3}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{pain4}</Text></View>
						</View>
						)}
					</View>
	    		</ScrollView>
	    		<View>
	    			<Text>"Last Infusion Date : "</Text>
	    		</View>
		        <View>
		          <Button
		              onPress={() => {
                    addSymptoms(this.props.fatigue, this.props.anxiety);
                    this.props.navigation.navigate('MainDash')}
                  }
		              title="SUBMIT"
		              color="#841584"/>
		        </View>
		        <View>
		          <Button
		              onPress={() => this.props.navigation.navigate('MainDash')}
		              title="Go Back"
		              color="#841584"/>
		        </View>
	    	</View>
	)
  };
}
