import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import partyReducer from './ducks/partyReducer';
import dataReducer from './ducks/dataReducer';
import characterReducer from './ducks/characterReducer';

const reducers = {
    userReducer: userReducer,
    partyReducer : partyReducer,
    dataReducer: dataReducer,
    characterReducer : characterReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));