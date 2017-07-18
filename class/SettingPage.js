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
    this.state = {
      account_clicked: false,
      notification_clicked: false,
      editRegimen_clicked: false,
      about_clicked: false,
      support_clicked: false
    }
  }
  clicked_account = () => {
    this.setState({
      account_clicked: true,
      notification_clicked: false,
      editRegimen_clicked: false,
      about_clicked: false,
      support_clicked: false
    })
  }
  clicked_notification = () => {
    this.setState({
      account_clicked: false,
      notification_clicked: true,
      editRegimen_clicked: false,
      about_clicked: false,
      support_clicked: false
    })
  }
  clicked_regimen = () => {
    this.setState({
      account_clicked: false,
      notification_clicked: false,
      editRegimen_clicked: true,
      about_clicked: false,
      support_clicked: false
    })
  }
  clicked_about = () => {
    this.setState({
      account_clicked: false,
      notification_clicked: false,
      editRegimen_clicked: false,
      about_clicked: true,
      support_clicked: false
    })
  }
  clicked_support = () => {
    this.setState({
      account_clicked: false,
      notification_clicked: false,
      editRegimen_clicked: false,
      about_clicked: false,
      support_clicked: true
    })
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
                onPress = {() => this.clicked_account()}
                title = "Edit Account"/>
              {renderIf(this.state.account_clicked, 
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
                onPress = {() => this.clicked_notification()}
                title = "Push Notification"/>
              {renderIf(this.state.notification_clicked, 
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
                onPress = {() => this.clicked_regimen()}
                title = "Edit Regimen"/>
              {renderIf(this.state.editRegimen_clicked, 
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
                onPress = {() => this.clicked_about()}
                title = "About"/> 
              {renderIf(this.state.about_clicked, 
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
                onPress = {() => this.clicked_support()}
                title = "Support"/>
              {renderIf(this.state.support_clicked, 
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
