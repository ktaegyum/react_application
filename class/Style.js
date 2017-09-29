import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FileSystem from 'react-native-filesystem';

export const styles = StyleSheet.create({
  whiteCard: {margin:10, padding:20, backgroundColor:'white'},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardHeader: {fontSize:16, fontFamily:'Avenir', color: '#5774a3', fontWeight:'bold'},
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
  dataHeaders : {fontSize:25,
  fontFamily:'Avenir',
marginLeft: 47,
marginTop:20,
marginBottom:10},
  dataTitles: {
    fontFamily:'courier',
    fontSize: 9
  },
  supportButton: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 5,
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
