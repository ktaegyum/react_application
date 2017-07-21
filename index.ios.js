/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 /*To get rid of */
console.ignoredYellowBox = ['Remote debugger'];
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import styles from './class/Style';
import SignUp from './class/SignUp'
import RegimenInfomation from './class/RegimenInfomation'
import Condition from './class/Condition'
import Overview from './class/Overview'
import DataPage from './class/DataPage'
import SettingsPage from './action_setting.js'
import SideEffect from './class/SideEffect'

import configureStore from './configureStore'
import {Provider} from 'react-redux'

const store = configureStore()

const mapState = (state) = > {
    return {
        people : state.people
    };
}

export default class project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: 1,
      interval: null
    };
  };
  static navigationOptions = {
    title: 'Infusion',
  };
  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }
  componentWillUnmount() {
      clearInterval(this.state.interval);
  }
  render() {
      return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>
          <View style ={{
            marginBottom: 40,
            backgroundColor: '#ffffff'
          }}>
            <ImageSlider images = {[
              require('./images/intro.png'),
              require('./images/trajectory.png'),
              require('./images/calendar.png')]}
              height = {400}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}/>
          </View>
          <View style = {{
            alignItems: 'center'
          }}>
          </View>
            <View style={{backgroundColor: 'antiquewhite'}}>
            <Button
              onPress = {() => this.props.navigation.navigate('SignUp')}
              title = "Sign Up"/>
            <Button
              onPress = {() => this.props.navigation.navigate('Condition')}
              title = "Log In W/ CancerBase"/>
            <Button
              onPress = {() => this.props.navigation.navigate('MainDash')}
              title = "Jump to Main Dashboard"/>
              <Button
                onPress = {() => console.log(this.props.people)}
                title = "ConsoleLog the store"/>
          </View>
        </View>
      );
  };
}

connect(mapState)(project)

const MainDashNavigator = TabNavigator({
  Overview: { screen: Overview },
  Data: { screen: DataPage },
  Settings: { screen: SettingsPage },
},
  {swipeEnabled : true,
  lazy: false,}
  // tabBarOptions: {styles.tabBarStyle}
);

const App = StackNavigator({
  Home: { screen: project },
  SignUp: { screen: SignUp },
  RegimenInfomation: { screen: RegimenInfomation },
  Condition: {screen: Condition},
  MainDash: {screen: MainDashNavigator},
  SideEffect: {screen: SideEffect},
});
/*
firebase.initializeApp({
    apiKey: "AIzaSyBfnermI1NQwpKOhy5FIKpJJ4Y_zZcCBJc",
    authDomain: "infusion-e7ed9.firebaseapp.com",
    databaseURL: "https://infusion-e7ed9.firebaseio.com",
    storageBucket: "infusion-e7ed9.appspot.com"
});
*/
const rnredux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('project', () => rnredux);
