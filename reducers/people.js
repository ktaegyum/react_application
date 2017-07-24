import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'
import {SETTING_ACCOUNT, SETTING_NOTIFICATION, SETTING_EDITREGIMEN, SETTING_ABOUT, SETTING_SUPPORT} from '../constants.js'

const initialState = {
  people: [],
  isFetching: false,
  error: false,
  setting_account: false,
  setting_regimen: false,
  setting_notification: false,
  setting_about: false,
  setting_support: false,
  symptom_observations_fake: true,
  symptom_observations: [
    {
      "entry_datetime": "2017-05-01T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-02T18:25:43.511Z",
      "nausea": 2,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": "2017-05-03T18:25:43.511Z",
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": "2017-05-04T18:25:43.511Z",
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 1,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": "2017-05-05T18:25:43.511Z",
      "nausea": 3,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-06T18:25:43.511Z",
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-07T18:25:43.511Z",
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-08T18:25:43.511Z",
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-09T18:25:43.511Z",
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-10T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-11T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-12T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 1,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-13T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-14T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-15T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 3,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-16T18:25:43.511Z",
      "nausea": 1,
      "fatigue": 4,
      "anxiety": 4,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-16T20:27:43.511Z",
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": "2017-05-17T18:25:43.511Z",
      "nausea": 3,
      "fatigue": 4,
      "anxiety": 2,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": "2017-05-18T18:25:43.511Z",
      "nausea": 4,
      "fatigue": 4,
      "anxiety": 1,
      "lack_of_appetite": 4
    },
    {
      "entry_datetime": "2017-05-19T18:25:43.511Z",
      "nausea": 4,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": "2017-05-20T18:25:43.511Z",
      "nausea": 3,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 3
    },
    {
      "entry_datetime": "2017-05-21T18:25:43.511Z",
      "nausea": 2,
      "fatigue": 3,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-22T18:25:43.511Z",
      "nausea": 2,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 2
    },
    {
      "entry_datetime": "2017-05-23T18:25:43.511Z",
      "nausea": 1,
      "fatigue": 2,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-24T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-25T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 1,
      "anxiety": 0,
      "lack_of_appetite": 1
    },
    {
      "entry_datetime": "2017-05-26T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-27T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 1,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-28T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    },
    {
      "entry_datetime": "2017-05-29T18:25:43.511Z",
      "nausea": 0,
      "fatigue": 0,
      "anxiety": 2,
      "lack_of_appetite": 0
    }
    ]

}
export default (state = initialState, action) => {
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
      return {
        setting_account: true,
        setting_regimen: false,
        setting_notification: false,
        setting_about: false,
        setting_comment: false,
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
    default:
      return state
  }
}