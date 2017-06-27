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
		      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
		      value1: 0,
		      value1Index: 0,
		      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
		      value2: 0,
		      value2Index: 0,
		      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
		      value3: 0,
		      value3Index: 0,
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
	    				<Text> Test </Text>
				          <RadioForm
				            formHorizontal={true}
				            animation={true}
				          >
				            {this.state.types2.map((obj, i) => {
				              var that = this;
				              var is_selected = this.state.value2Index == i;
				              return (
				                <View key={i} style={styles.radioButtonWrap}>
				                  <RadioButton
				                    isSelected={is_selected}
				                    obj={obj}
				                    index={i}
				                    labelHorizontal={true}
				                    buttonColor={'#2196f3'}
				                    labelColor={'#000'}
				                    style={[i !== this.state.types2.length-1 && styles.radioStyle]}
				                    onPress={(value, index) => {
				                      this.setState({value2:value})
				                      this.setState({value2Index: index});
				                    }}
				                  />
				                </View>
				              )
				            })}
				          </RadioForm>
	    			</View>

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
	          				onPress = {(value) => {this.setState(prevState => {return {nausea: value};})}}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
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
	          				onPress = {(value) => {this.setState(prevState => {return {appetite: value};})}}
							formHorizontal={true}
							labelHorizontal={false}
							buttonColor={'#2196f3'} 
							isSelected = {true}
							buttonWrapStyle={{marginLeft: 50}}/>
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
