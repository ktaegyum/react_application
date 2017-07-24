import {
    TREATMENT_NUMBER_UPDATE,
    INFUSION_CYLCE_UPDATE,
    START_DATE_CHANGE
} from '../constants'

const INITIAL_STATE = {
    num_treatments: 0,
    days_per_infusion_cycle: 0,
    start_date: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TREATMENT_NUMBER_UPDATE:
            return {...state, num_treatments: action.payload}
        case INFUSION_CYLCE_UPDATE:
            return {...state, days_per_infusion_cycle: action.payload}
        case START_DATE_CHANGE:
            return {...state, start_date: action.payload}
        default:
            return state
    }
}