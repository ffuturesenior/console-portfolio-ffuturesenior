import { consoleOutputReducer } from "./store/consoleOutputReducer"
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    consoleOutput:consoleOutputReducer
})

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))