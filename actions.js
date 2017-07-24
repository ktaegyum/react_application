import {
    FETCHING_PEOPLE, 
    FETCHING_PEOPLE_SUCCESS,
    FETCHING_PEOPLE_FAILURE,
    TREATMENT_NUMBER_UPDATE,
    INFUSION_CYLCE_UPDATE,
    START_DATE_CHANGE
} from './constants'

export function fetchPeopleFromAPI() {
  return (dispatch) => {
    dispatch(getPeople()) //first, indicate that you are in fetching mode while you run the request
    fetch('https://swapi.co/api/people/') //then, run the request itself
    .then(res => res.json()) //set a callback that waits for a result. convert to JSON
    .then(json => dispatch(getPeopleSuccess(json.results))) //take that result, dispatch it as a successful fetch
    .catch(err => { //but if that doesn't work, then admit in a dispatch that there was an error to close off the series of events.
      console.log(err);
      dispatch(getPeopleFailure(err))
    })
  }
}

//create 3 fns that kick off those actions
function getPeople(){
  return {
    type: FETCHING_PEOPLE
  }
}

function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data
  }
}

function getPeopleFailure(){
  return{
    type: FETCHING_PEOPLE_FAILURE
  }
}

export const updateRegimen = (field, value) => (dispatch) => {
  const action = {treatment: TREATMENT_NUMBER_UPDATE, infusion: INFUSION_CYLCE_UPDATE, start_date: START_DATE_CHANGE};
  dispatch({
    type: action[field],
    payload: value
  })
}
