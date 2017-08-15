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
import {NavigationActions} from 'react-navigation';
import * as firebase from "firebase";
import {styles} from './Style';

function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}
export default class SettingsPage extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <View>
        <ScrollView styles={{alignItems: 'space-between'}}>
          <View style={styles.supportButton}>
               <Button
                onPress={() => this.props.navigation.navigate('RegimenInfomation')}
                title = "Edit Regimen"/>
          </View>

          <View style={styles.supportButton}>
              <Button
                onPress = {this.props.showing_support}
                title = "Support"/>
              {renderIf(this.props.support,
              <View>
                <Text>Contact brian.cohn@usc.edu</Text>
              </View>
              )}
          </View>

          <View style={styles.supportButton}>
              <Button
                onPress = {async () => {
                    const resetAction = NavigationActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Home'})
                      ]
                    })
                    this.props.navigation.dispatch(resetAction);
                    await firebase.auth().signOut();
                }}
                title = "Logout"/>
          </View>

        </ScrollView>
      </View>
    )
  };
}
