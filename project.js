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
import {Provider} from 'react-redux'

//Pages class
import styles from './class/Style'
import SignUp from './action_signup.js'
import LogIn from './action_login.js'
import RegimenInfomation from './action_regimentInfo'
import Overview from './action_overview'
import DataPage from './action_datapage'
import SettingsPage from './action_setting.js'
import SideEffect from './action_sideEffect.js'
import OptimizeSchedule from './action_OptimizeSchedule.js'
import * as firebase from "firebase";
//Redux Store
import store, {persistor} from './reducers/people.js'
import firebaseApp from './Firebase';


export default class project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: 0,
      interval: null,
      loggedIn: true,
    };
  };

  static navigationOptions = {
  headerMode: 'none',
  }

  async componentWillMount() {
    persistor.rehydrate()
    firebase.auth().onAuthStateChanged((user) => {
      // TODO implement && user.emailVerified
      if (user) {
        console.log('YOU ARE LOGGED IN:'); console.log(user)
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  static navigationOptions = {
    title: 'Infusion'
  };

  render() {

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
          backgroundColor: '#ffffff'
      }}>
        <View style ={{


        }}>
          <ImageSlider images={[require('./images/intro.png'), require('./images/trajectory.png'), require('./images/calendar.png')]} height={400} position={this.state.position} onPositionChanged={position => this.setState({position})}/>
        </View>
        <View style={{
          alignItems: 'center'
        }}></View>
        <View style={{
          backgroundColor: '#f2f5f9',
          marginTop:80
        }}>
          <Button onPress= {() => this.props.navigation.navigate('SignUp')} title="Sign Up"/>
            </View>
            <View style={{
              backgroundColor: '#f2f5f9',
              marginBottom:40
            }}>
          <Button onPress= {() => this.props.navigation.navigate('LogIn')} title="Log In"/>
        </View>
      </View>
    );
  };
}
