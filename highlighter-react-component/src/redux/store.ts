import { combineReducers } from 'redux'
import {selection} from './reducers/selection'

export const rootReducer = combineReducers({
   selection
  })

export type AppState = ReturnType<typeof rootReducer>