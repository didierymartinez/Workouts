import {createStore}  from 'redux';
import { createSlice, combineReducers } from '@reduxjs/toolkit'

const initial = { value : 0, showCounter: true };

export const slice = createSlice({ 
    name: 'counter', 
    initialState: initial, 
    reducers: {
        increase(store){
            store.value++
        },
        decrease(store){
            store.value--
        },
        toggle(store){
            store.showCounter = !store.showCounter;
        }
    }
});

export const sliceAuth = createSlice({
    name: 'auth',
    initialState: { isLogged: false},
    reducers: {
        loggin(state){
            state.isLogged = true;
        },
        loggout(state){
            state.isLogged = false;
        }
    }
});

export const { increase, decrease, toggle } = slice.actions;
export const { loggin, loggout } = sliceAuth.actions;

const reducers = combineReducers({counter: slice.reducer, auth: sliceAuth.reducer})

export default createStore(reducers);