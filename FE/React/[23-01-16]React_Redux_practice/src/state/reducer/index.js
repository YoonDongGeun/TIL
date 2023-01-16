//Initial state
import {combineReducers} from 'redux';
import accountRecuder from "./accountReducer"

const reducers = combineReducers({
    account: accountRecuder
})

export default reducers;