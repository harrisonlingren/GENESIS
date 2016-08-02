import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import personalities from './personalities';

const rootReducer = combineReducers({personalities, routing: routerReducer});

export default rootReducer;

