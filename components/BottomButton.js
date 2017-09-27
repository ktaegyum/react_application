import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

export const BottomButton = (buttonText, pageDestination, navigatorObject) => {
  return(
  <TouchableHighlight style={{backgroundColor:'#888888',
    alignItems:'center',
    justifyContent:'center',
    height:60}} onPress= {() => {
    navigatorObject.navigate(pageDestination)}
  }>
    <Text style={{fontSize:18, color:'#FFFFFF'}}>{buttonText}</Text>
  </TouchableHighlight>
)
}
