import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SideEffect from './class/SideEffect'
import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from './constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from './constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from './constants.js'
import {SYSMTOM_OBSERVATION} from './constants.js'
import {
  ADD_SYMPTOMS,
  EFFECT_FATIGUE,
  EFFECT_NAUSEA,
  EFFECT_FEVER,
  EFFECT_PAIN,
  EFFECT_CLICKED_FATIGUE,
  EFFECT_CLICKED_NAUSEA,
  EFFECT_CLICKED_FEVER,
  EFFECT_CLICKED_PAIN
} from './constants.js'

const mapStateToProps = state => ({
  fatigue: state.sideEffect_fatigue,
  nausea: state.sideEffect_nausea,
  fever: state.sideEffect_fever,
  pain: state.sideEffect_pain,
  fatigue_isClicked: state.sideEffect_fatigue_isClicked,
  nausea_isClicked: state.sideEffect_nausea_isClicked,
  fever_isClicked: state.sideEffect_fever_isClicked,
  pain_isClicked: state.sideEffect_pain_isClicked,
  state:state
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SideEffect);
