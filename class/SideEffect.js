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
	    				<Text style={styles.cardHeader}>NAUSEA</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				// labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> redux_dispatcher('nausea', value)}
							formHorizontal={true}
							labelHorizontal={false}
							// buttonColor={'#2196f3'}
							isSelected = {true}
						buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.props.nausea_isClicked,
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{nausea0}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{nausea1}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{nausea2}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{nausea3}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{nausea4}</Text></View>
						</View>
						)}
	    				<Text style={styles.cardHeader}>APPETITE</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				// labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> redux_dispatcher('fever', value)}
							formHorizontal={true}
							labelHorizontal={false}
							// buttonColor={'#2196f3'}
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.props.fever_isClicked,
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fever0}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fever1}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fever2}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fever3}</Text></View>
							<View style={styles.symptomDescription}><Text style={styles.symptomDescriptionText}>{fever4}</Text></View>
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
	          				onPress = {(value)=> redux_dispatcher('pain', value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'}
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.props.pain_isClicked,
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
	    			<Button
	    				onPress = {() => this._showDateTimePicker()}
	    				title = {this.state.buttonMessage}
	    				color = "#841584"/>
				   	<DateTimePicker
			          isVisible={this.state.isDateTimePickerVisible}
			          onConfirm={this._handleDatePicked}
			          onCancel={this._hideDateTimePicker}/>
	    		</View>
		        <View>
		          <Button
		              onPress={() => {
                    addSymptoms(this.props.fatigue, this.props.nausea, this.props.fever, this.props.pain);
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
