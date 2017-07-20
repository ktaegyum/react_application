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
import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'

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
        <ScrollView>
            <View style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginBottom: 5,
              }}>
              <Button
                onPress = {this.props.showing_account}
                title = "Edit Account"/>
              {renderIf(this.props.account, 
              <View>
                <Text>hey</Text>
              </View>
              )}
          </View>

          <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 5,
            }}>
              <Button
                onPress = {this.props.showing_notification}
                title = "Push Notification"/>
              {renderIf(this.props.notification, 
              <View>
                <Text>hey</Text>
              </View>
              )}
          </View>
        
          <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 5,
            }}>
               <Button
                onPress={() => this.props.navigation.navigate('RegimenInfomation')}
                title = "Edit Regimen"/>
              {renderIf(this.props.regimen, 
              <View>
                <Text>hey</Text>
              </View> 
              )}      
          </View>
        
          <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 5,
            }}>
              <Button
                onPress = {this.props.showing_about}
                title = "About"/> 
              {renderIf(this.props.about, 
              <View>
                <Text>hey</Text>
              </View>  
              )}     
          </View>
          
          <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 5,
            }}>
              <Button
                onPress = {this.props.showing_support}
                title = "Support"/>
              {renderIf(this.props.support, 
              <View>
                <Text>hey</Text>
              </View> 
              )}
          </View>

        </ScrollView>
      </View>
    )
  };
}
