import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DataPage from './class/DataPage'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from './constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from './constants.js'
import {SYMPTOM_OBSERVATION} from './constants.js'

const mapStateToProps = state => ({
  observations: state.symptom_observations,
})

const mapDispatchToProps = (dispatch) => ({
	//
})

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
