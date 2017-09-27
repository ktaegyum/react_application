import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'
import {REGIMEN_INFUSIONCYCLE, REGIMEN_INFUSIONNUM, REGIMEN_DATE} from '../constants.js'
import {SYMPTOM_OBSERVATION} from '../constants.js'
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
} from '../constants.js'
import {SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_USERINFO} from '../constants.js'
import {Infusion} from '../class/Infusion.js'
import logger from 'redux-logger'
import {createStore, compose,applyMiddleware} from 'redux'
import {persistStore,autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
const millisecondsInADay = 60*60*24*1000
const initialState = {
  people: [],
  isFetching: false,
  error: false,
  regimen_infusionCycle: 14,
  regimen_infusionNum: 12,
  regimen_date: Date.now() - 30*millisecondsInADay,
  setting_account: false,
  setting_regimen: false,
  setting_notification: false,
  setting_about: false,
  setting_support: false,
  symptom_observations_fake: true,
  sideEffect_fatigue: 0,
  sideEffect_nausea: 0,
  sideEffect_fever: 0,
  sideEffect_pain: 0,
  sideEffect_fatigue_isClicked: true,
  sideEffect_nausea_isClicked: false,
  sideEffect_fever_isClicked: false,
  sideEffect_pain_isClicked: false,
  signUp_email: '',
  signUp_password: '',
  signUp_userInfo: '',
  infusion: [],
  symptom_observations: [
    {
      "entry_datetime": Date.now() - millisecondsInADay*30,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*29,
      "nausea": 2,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*28,
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*27,
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*26,
      "nausea": 3,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*25,
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*24,
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*23,
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*22,
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*21,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*20,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*19,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 1,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*18,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*17,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*16,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 3,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*15,
      "nausea": 1,
      "fatigue": 4,
      "anxiety": 4,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*14,
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*13,
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*12,
      "nausea": 4,
      "fatigue": 4,
      "anxiety": 1,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*11,
      "nausea": 4,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*10,
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*9,
      "nausea": 2,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*8,
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*7,
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*6,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*5,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*4,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*3,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*2,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": Date.now() - millisecondsInADay*1,
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    }
  ]

}
export const peopleReducer = (state = initialState, action) => {
  console.log(state.regimen_date, "infusiondate");
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {
        ...state,
        isFetching: true,
        people: []
      }
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.content
      }
    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case SETTING_ACCOUNT:
      return {
        ...state,
        setting_account: true,
        setting_regimen: false,
        setting_notification: false,
        setting_about: false,
        setting_support: false
      }
    case SETTING_NOTIFICATION:
      return {
        ...state,
        setting_account: false,
        setting_regimen: false,
        setting_notification: true,
        setting_about: false,
        setting_support: false
      }
    case SETTING_EDITREGIMEN:
      return {
        ...state,
        setting_account: false,
        setting_regimen: true,
        setting_notification: false,
        setting_about: false,
        setting_support: false
      }
    case SETTING_ABOUT:
      return {
        ...state,
        setting_account: false,
        setting_regimen: false,
        setting_notification: false,
        setting_about: true,
        setting_support: false
      }
    case SETTING_SUPPORT:
      return {
        ...state,
        setting_account: false,
        setting_regimen: false,
        setting_notification: false,
        setting_about: false,
        setting_support: true
      }
    case REGIMEN_INFUSIONCYCLE:
      return {
        ...state,
        regimen_infusionCycle: action.content
      }
    case REGIMEN_INFUSIONNUM:
      return {
        ...state,
        regimen_infusionNum: action.content
      }
    case REGIMEN_DATE:
      return {
        ...state,
        regimen_date: action.content
      }
    case EFFECT_FATIGUE:
      return {
        ...state,
        sideEffect_fatigue: action.content
      }
    case EFFECT_NAUSEA:
      return {
        ...state,
        sideEffect_nausea: action.content
      }
    case EFFECT_FEVER:
      return {
        ...state,
        sideEffect_fever: action.content
      }
    case EFFECT_PAIN:
      return {
        ...state,
        sideEffect_pain: action.content
      }
    case EFFECT_CLICKED_FATIGUE:
      return {
        ...state,
        sideEffect_fatigue_isClicked: true,
        sideEffect_nausea_isClicked: false,
        sideEffect_fever_isClicked: false,
        sideEffect_pain_isClicked: false
      }
    case EFFECT_CLICKED_NAUSEA:
      return {
        ...state,
        sideEffect_fatigue_isClicked: false,
        sideEffect_nausea_isClicked: true,
        sideEffect_fever_isClicked: false,
        sideEffect_pain_isClicked: false
      }
    case EFFECT_CLICKED_FEVER:
      return {
        ...state,
        sideEffect_fatigue_isClicked: false,
        sideEffect_nausea_isClicked: false,
        sideEffect_fever_isClicked: true,
        sideEffect_pain_isClicked: false
      }
    case EFFECT_CLICKED_PAIN:
      return {
        ...state,
        sideEffect_fatigue_isClicked: false,
        sideEffect_nausea_isClicked: false,
        sideEffect_fever_isClicked: false,
        sideEffect_pain_isClicked: true
      }
    case ADD_SYMPTOMS:

        newItem = {
          "entry_datetime": action.content.date,
          "nausea": action.content.fatigue,
          "fatigue": action.content.nausea,
          "anxiety": action.content.fever,
          "lack_of_appetite": action.content.pain,
        }
        console.log("new Symptom")
        console.log(newItem)
      return { symptom_observations: [...state.symptom_observations, newItem] }
    case SIGNUP_EMAIL:
      return {
        ...state,
        signUp_email: action.content,
      }
    case SIGNUP_PASSWORD:
      return {
        ...state,
        signUp_password: action.content,
      }
    case SIGNUP_USERINFO:
      return {
        ...state,
        signUp_userInfo: action.content,
      }
    default:
      return state
  }
}


const composedEnhancers = compose(
  applyMiddleware(logger),
  autoRehydrate()
);

const store = createStore(peopleReducer, composedEnhancers); // can skip preloadedState if not available


let persistor = persistStore(store, {storage: AsyncStorage}, () => {
  console.log('Restored Data For Redux!')
})





//persist
export default store;
