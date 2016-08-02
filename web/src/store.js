import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './common/reducers/index';
const personalities = {
  warrior: 0,
  artist: 0,
  shepherd: 0
};

const defaultState = {
  personalities
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
