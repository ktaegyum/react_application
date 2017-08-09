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

import {createStore} from 'redux'

const initialState = {
  people: [],
  isFetching: false,
  error: false,
  regimen_infusionCycle: 14,
  regimen_infusionNum: 12,
  regimen_date: Date.now(),
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
  sideEffect_fatigue_isClicked: false,
  sideEffect_nausea_isClicked: false,
  sideEffect_fever_isClicked: false,
  sideEffect_pain_isClicked: false,
  symptom_observations: [
    {
      "entry_datetime": Date.now() - 60*60*24*1000*30,
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 2,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-02T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*29,
>>>>>>> master
      "nausea": 2,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-03T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*28,
>>>>>>> master
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-04T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*27,
>>>>>>> master
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-05T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*26,
>>>>>>> master
      "nausea": 3,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-06T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*25,
>>>>>>> master
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-07T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*24,
>>>>>>> master
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-08T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*23,
>>>>>>> master
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-09T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*22,
>>>>>>> master
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-10T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*21,
>>>>>>> master
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-11T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*20,
>>>>>>> master
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-12T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*19,
>>>>>>> master
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 1,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-13T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*18,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-14T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*17,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-15T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*16,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 3,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-16T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*15,
>>>>>>> master
      "nausea": 1,
      "fatigue": 4,
      "anxiety": 4,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-16T20:27:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*14,
>>>>>>> master
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-17T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*13,
>>>>>>> master
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-18T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*12,
>>>>>>> master
      "nausea": 4,
      "fatigue": 4,
      "anxiety": 1,
      "lack_of_appetite": 4
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-19T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*11,
>>>>>>> master
      "nausea": 4,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-20T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*10,
>>>>>>> master
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-21T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*9,
>>>>>>> master
      "nausea": 2,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-22T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*8,
>>>>>>> master
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-23T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*7,
>>>>>>> master
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-24T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*6,
>>>>>>> master
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-25T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*5,
>>>>>>> master
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-26T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*4,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-27T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*3,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-28T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*2,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
<<<<<<< HEAD
    }, {
      "entry_datetime": "2017-05-29T18:25:43.511Z",
=======
    },
    {
      "entry_datetime": Date.now() - 60*60*24*1000*1,
>>>>>>> master
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    }
  ]

}
export const peopleReducer = (state = initialState, action) => {
  console.log(state.regimen_infusionCycle);
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
<<<<<<< HEAD
      state.symptom_observations.push({"entry_datetime": action.content.date, "nausea": action.content.fatigue, "fatigue": action.content.nausea, "anxiety": action.content.fever, "lack_of_appetite": action.content.pain})return {
        ...state
=======
        state.symptom_observations.push(
        {
          "entry_datetime": action.content.date,
          "nausea": action.content.fatigue,
          "fatigue": action.content.nausea,
          "anxiety": action.content.fever,
          "lack_of_appetite": action.content.pain,
        })
      return {
        ...state,
>>>>>>> master
      }
    default:
      return state
  }
}
let store = createStore(peopleReducer);

export default store;
