import { consoleOutputReducer } from "./store/consoleOutputReducer"
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getDataReducer } from "./store/getDataReducer";

const rootReducer=combineReducers({
    consoleOutput:consoleOutputReducer,
    getData:getDataReducer
})

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))