import { combineReducers } from 'redux'
import gamesReducer from './games/reducers'
import newsReducer from './news/reducers'

const rootReducer = combineReducers({
  gamesReducer,
  newsReducer
})

export default rootReducer
