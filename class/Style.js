import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FileSystem from 'react-native-filesystem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  intro: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EULA: async function() {
      /*return await FileSystem.readFile('./textfiles/EULA.txt');*/
      return 'asd'
  }
});
