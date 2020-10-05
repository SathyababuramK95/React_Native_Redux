import React from 'react';
import { combineReducers, createStore } from 'redux';
import UserReducer from './reducers/user_reducer';


const combined_Reducers = combineReducers( { 
    UserReducer,
});


const store = createStore(combined_Reducers);

export default store;