import {combineReducers} from 'redux'
import people from './people'
import regimen from './regimen'

const rootReducer = combineReducers({
  people,
  regimen
})

export default rootReducer
