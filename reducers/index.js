import {combineReducers} from 'redux'
import {mainReducer} from './main'

const rootReducer = combineReducers({
  userData : mainReducer
})

export default rootReducer
