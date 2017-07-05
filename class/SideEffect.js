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
var radio_props = [
  {label: '0', value: 0 },
  {label: '1', value: 1 },
  {label: '2', value: 2 },
  {label: '3', value: 3 },
  {label: '4', value: 4 },
];
function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
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
			fatigue: 0,
			nausea: 0,
			fever: 0,
			pain: 0,
			isClicked_fatigue: false,
			isClicked_nausea: false,
			isClicked_fever: false,
			isClicked_pain: false,
		}
	}
	static navigationOptions = {
    	title: 'Side Effect',
	};
	clicked_fatigue = (value) => {
		this.setState({
			fatigue: value,
			isClicked_fatigue: true,
			isClicked_nausea: false,
			isClicked_fever: false,
			isClicked_pain: false,
		})
	}
	clicked_nausea = (value) => {
		this.setState({
			nausea: value,
			isClicked_fatigue: false,
			isClicked_nausea: true,
			isClicked_fever: false,
			isClicked_pain: false,
		})
	}
	clicked_fever = (value) => {
		this.setState({
			appetite: value,
			isClicked_fatigue: false,
			isClicked_nausea: false,
			isClicked_fever: true,
			isClicked_pain: false,
		})
	}
	clicked_pain = (value) => {
		this.setState({
			appetite: value,
			isClicked_fatigue: false,
			isClicked_nausea: false,
			isClicked_fever: false,
			isClicked_pain: true,
		})
	}
	render() {
	    return (
		    <View style = {{
		        flex: 1,
		        flexDirection: 'column',
		        justifyContent: 'space-between'}}>
	    		<ScrollView>
	    			<View>
	    				<Text>FATIGUE</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> this.clicked_fatigue(value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'}
							isSelected = {false}
							buttonWrapStyle={{marginLeft: 100}}/>

						{renderIf(this.state.isClicked_fatigue, 
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fatigue0}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fatigue1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fatigue2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fatigue3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fatigue4}</Text></View>
						</View>
						)}
						<Text>Selected Level: {this.state.fatigue}</Text>
	    				<Text>NAUSEA</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> this.clicked_nausea(value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
						buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.state.isClicked_nausea, 
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{nausea0}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{nausea1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{nausea2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{nausea3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{nausea4}</Text></View>
						</View>
						)}
						<Text>Selected Level: {this.state.nausea}</Text>
	    				<Text>APPETITE</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> this.clicked_fever(value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.state.isClicked_fever, 
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fever0}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fever1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fever2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fever3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{fever4}</Text></View>
						</View>
						)}
						<Text>Selected Level: {this.state.fever}</Text>
						
						<Text>Pain</Text>
	 					<RadioForm
	          				radio_props = {radio_props}
	          				initial = {0}
	          				style = {{flex: 1,
						        flexDirection: 'row',
						        justifyContent: 'space-between',
						        alignItems: 'center'
						    	}}
	          				labelStyle = {{color: '#000000'}}
	          				onPress = {(value)=> this.clicked_pain(value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.state.isClicked_pain, 
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{pain0}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{pain1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{pain2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{pain3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{pain4}</Text></View>
						</View>
						)}
						<Text>Selected Level: {this.state.appetite}</Text>
					</View>
	    		</ScrollView>
		        <View style={{backgroundColor: 'antiquewhite'}}>
		          <Button
		              onPress={() => this.props.navigation.navigate('MainDash')}
		              title="DONE"
		              color="#841584"/>
		        </View>
	    	</View>
	) 
  };
}
