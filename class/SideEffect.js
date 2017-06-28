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
var explanation1 = "This is zero, and there should be more explan"
var explanation2 = "This is zero, and there should be more explan"
var explanation3 = "This is zero, and there should be more explan"
var explanation4 = "This is zero, and there should be more explan"
var explanation5 = "This is zero, and there should be more explan"

export default class SideEffect extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			fatigue: 0,
			nausea: 0,
			appetite: 0,
			isClicked_fatigue: false,
			isClicked_nausea: false,
			isClicked_appetite: false,
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
			isClicked_appetite: false,
		})
	}
	clicked_nausea = (value) => {
		this.setState({
			nausea: value,
			isClicked_fatigue: false,
			isClicked_nausea: true,
			isClicked_appetite: false,
		})
	}
	clicked_appetite = (value) => {
		this.setState({
			appetite: value,
			isClicked_fatigue: false,
			isClicked_nausea: false,
			isClicked_appetite: true,
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
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation4}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation5}</Text></View>
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
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation4}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation5}</Text></View>
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
	          				onPress = {(value)=> this.clicked_appetite(value)}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						{renderIf(this.state.isClicked_appetite, 
						<View style={{flex: 1, flexDirection: 'row'}}>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation1}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation2}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation3}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation4}</Text></View>
							<View style={{width: 76, borderLeftColor:'black', borderLeftWidth: 2, alignItems: 'center'}}><Text>{explanation5}</Text></View>
						</View>
						)}
						<Text>Selected Level: {this.state.appetite}</Text>
					</View>
					
	    		</ScrollView>

		        <View style={{backgroundColor: 'antiquewhite'}}>
		          <Button
		              onPress={() => this.props.navigation.navigate('RegimenInfomation')}
		              title="DONE"
		              color="#841584"/>
		        </View>
	    	</View>
	    	

	) 
  };
}
