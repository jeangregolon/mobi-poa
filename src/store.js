import { createStore, compose, applyMiddleware, combineReducers } from 'redux' 
import thunk from 'redux-thunk' 
import {
    lineDetailsReducer,
    lineListReducer,
  } from './reducers/lineReducers' 
const initialState = {} 
const reducer = combineReducers({
    lineList: lineListReducer,
    lineDetails: lineDetailsReducer,
}) 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
) 

export default store 
