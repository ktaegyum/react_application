console.ignoredYellowBox = ['Remote debugger'];
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import configureStore from './configureStore'
import {Provider} from 'react-redux'

//Pages class
import styles from './class/Style'
import SignUp from './action_signup.js'
import LogIn from './action_login.js'
import RegimenInfomation from './action_regimentInfo'
import Condition from './class/Condition'
import Overview from './action_overview'
import DataPage from './action_datapage'
import SettingsPage from './action_setting.js'
import SideEffect from './action_sideEffect.js'
import * as firebase from "firebase";
//Redux Store
import store from './reducers/people.js'
import firebaseApp from './Firebase';


export default class project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: 0,
      interval: null,
      isLoading: true,
    };
  };

  async componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.props.navigation.dispatch('MainDash')
      } else {
        this.setState({isLoading: false});
      }
    });
  }

  static navigationOptions = {
    title: 'Infusion'
  };

  render() {
    isItLoading = () => {
      if (this.state.isLoading) {
        return(
          <Text>LOAD TRUE</Text>
        )
      } else {
        <Text>LOAD FALSE</Text>
      }
    }
    debugger;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style ={{
          marginBottom: 40,
          backgroundColor: '#ffffff'
        }}>
          <ImageSlider images={[require('./images/intro.png'), require('./images/trajectory.png'), require('./images/calendar.png')]} height={400} position={this.state.position} onPositionChanged={position => this.setState({position})}/>
        </View>
        <View style={{
          alignItems: 'center'
        }}></View>
        <View style={{
          backgroundColor: '#FFFFFF'
        }}>
        <Text>{isItLoading()}</Text>
          <Button onPress= {() => this.props.navigation.navigate('SignUp')} title="Sign Up"/>
          <Button onPress= {() => this.props.navigation.navigate('Condition')} title="Log In W/ CancerBase"/>
          <Button onPress= {() => this.props.navigation.navigate('MainDash')} title="Jump to Main Dashboard"/>
        </View>
      </View>
    );
  };
}