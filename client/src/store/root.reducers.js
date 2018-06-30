import { combineReducers } from 'redux'
import gamesReducer from './games/reducers'
import newsReducer from './news/reducers'
import usersReducer from './user/reducers'

const rootReducer = combineReducers({
  gamesReducer,
  newsReducer,
  usersReducer
})

export default rootReducer
