import { combineReducers } from 'redux';

const reducer = (state = {}, action) => state;

const reducers = combineReducers({ reducer });

const rootReducer = (state: any, action: any) => reducers(state, action);

export default rootReducer;
