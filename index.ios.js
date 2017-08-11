/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
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
  Image
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {StackNavigator, TabNavigator} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import configureStore from './configureStore'
import {Provider} from 'react-redux'

//Pages class
import styles from './class/Style';
import SignUp from './class/SignUp'
import RegimenInfomation from './action_regimentInfo'
import Condition from './class/Condition'
import Overview from './action_overview'
import DataPage from './action_datapage'
import SettingsPage from './action_setting.js'
import SideEffect from './action_sideEffect.js'

//Redux Store
import store from './reducers/people.js'

//initial page
export default class project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: 0,
      interval: null
    };
  };
  static navigationOptions = {
    title: 'Infusion'
  };
  render() {
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
          <Button onPress= {() => this.props.navigation.navigate('SignUp')} title="Sign Up"/>
          <Button onPress= {() => this.props.navigation.navigate('Condition')} title="Log In W/ CancerBase"/>
          <Button onPress= {() => this.props.navigation.navigate('MainDash')} title="Jump to Main Dashboard"/>
        </View>
      </View>
    );
  };
}

const MainDashNavigator = TabNavigator({
  Overview: {
    screen: Overview
  },
  Data: {
    screen: DataPage
  },
  Settings: {
    screen: SettingsPage
  }
}, {
  swipeEnabled: true,
  lazy: false
}
// tabBarOptions: {styles.tabBarStyle}
);

const App = StackNavigator({
  Home: {
    screen: project
  },
  SignUp: {
    screen: SignUp
  },
  RegimenInfomation: {
    screen: RegimenInfomation
  },
  Condition: {
    screen: Condition
  },
  MainDash: {
    screen: MainDashNavigator
  },
  SideEffect: {
    screen: SideEffect
  }
});
/* firebase setup
firebase.initializeApp({
    apiKey: "AIzaSyBfnermI1NQwpKOhy5FIKpJJ4Y_zZcCBJc",
    authDomain: "infusion-e7ed9.firebaseapp.com",
    databaseURL: "https://infusion-e7ed9.firebaseio.com",
    storageBucket: "infusion-e7ed9.appspot.com"
});
*/
//redux initialization
const rnredux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
//calling
AppRegistry.registerComponent('project', () => rnredux);
