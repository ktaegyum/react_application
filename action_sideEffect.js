import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SideEffect from './class/SideEffect'
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
  EFFECT_CLICKED_PAIN
} from './constants.js'

const mapStateToProps = state => ({
  fatigue: state.sideEffect_fatigue,
  anxiety: state.sideEffect_anxiety,
  fatigue_isClicked: state.sideEffect_fatigue_isClicked,
  anxiety_isClicked: state.sideEffect_anxiety_isClicked,
  last_infusion: state.sideEffect_last_infusion,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SideEffect);
