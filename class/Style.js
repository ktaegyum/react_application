import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FileSystem from 'react-native-filesystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  symptomDescription: {
    width: 75,
    borderLeftColor: 'lightgrey',
    borderLeftWidth: 1,
    alignItems: 'center'
  },
  symptomDescriptionText: {
    fontSize: 8,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  intro: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sideEffectTitles: {
    fontSize:20,
    marginBottom:20,
    fontFamily: 'Avenir',
    marginLeft: 20,
  }
});
