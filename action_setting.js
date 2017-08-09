import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SettingsPage from './class/SettingPage';
import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from './constants.js'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from './constants.js'

const mapStateToProps = state => ({
  account: state.setting_account,
  regimen: state.setting_regimen,
  notification: state.setting_notification,
  about: state.setting_about,
  support: state.setting_support,
  test: state.test,
})

const mapDispatchToProps = (dispatch) => ({
  showing_account: () => { dispatch({ type: SETTING_ACCOUNT })},
  showing_regimen: () => { dispatch({ type: SETTING_EDITREGIMEN })},
  showing_notification: () => { dispatch({ type: SETTING_NOTIFICATION })},
  showing_about: () => { dispatch({ type: SETTING_ABOUT })},
  showing_support: () => { dispatch({ type: SETTING_SUPPORT })},
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
