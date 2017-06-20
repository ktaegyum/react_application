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
var radio_props = [
  {label: '0', value: 0 },
  {label: '1', value: 1 },
  {label: '2', value: 2 },
  {label: '3', value: 3 },
  {label: '4', value: 4 }
];

export default class SideEffect extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			fatigue: 0,
			nausea: 0,
			appetite: 0,
		}
	}
	static navigationOptions = {
    	title: 'Side Effect',
	};
	render() {
	    return (
		    <View style = {{
		        flex: 1,
		        flexDirection: 'column',
		        justifyContent: 'space-between',
		    	padding: 10}}>
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
	          				onPress = {(value) => {this.setState(prevState => {return {fatigue: value};})}}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
						<Text>Selected Level: {this.state.fatigue}</Text>
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
