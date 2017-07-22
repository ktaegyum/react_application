import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from '../constants.js'

import { createStore } from 'redux'

const initialState = {
  people: [],
  isFetching: false,
  error: false,
  regimen_infusionCycle: 0,
  regimen_infusionNum: 0,
  regimen_date: '',
  setting_account: false,
  setting_regimen: false,
  setting_notification: false,
  setting_about: false,
  setting_support: false,
}
export const peopleReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_PEOPLE:
      return {
        ...state,
        isFetching: true,
        people:[]
      }
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.data
      }
    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error:true
      }
    case SETTING_ACCOUNT:
      console.log("asd");
      return {
        setting_account: true,
        setting_regimen: false,
        setting_notification: false,
        setting_about: false,
        setting_comment: false,
        test:25,
      }
    case SETTING_NOTIFICATION:
      return {
        setting_account: false,
        setting_regimen: false,
        setting_notification: true,
        setting_about: false,
        setting_comment: false,
      }
    case SETTING_EDITREGIMEN:
      return {
        setting_account: false,
        setting_regimen: true,
        setting_notification: false,
        setting_about: false,
        setting_comment: false,
      }
    case SETTING_ABOUT:
      return {
        setting_account: false,
        setting_regimen: false,
        setting_notification: false,
        setting_about: true,
        setting_comment: false,
      }
    case SETTING_SUPPORT:
      return {
        setting_account: false,
        setting_regimen: false,
        setting_notification: false,
        setting_about: false,
        setting_support: true,
      }
    case REGIMEN_INFUSIONCYCLE:
      return {

      }
    case REGIMEN_INFUSIONNUM:
      return {

      }
    case REGIMEN_DATE:
      return {

      }
    default:
      return state
  }
}

let store = createStore(peopleReducer);

export default store;
