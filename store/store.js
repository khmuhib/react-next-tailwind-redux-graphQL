import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice'
import contactReducer from './contactSlice'

export const store = configureStore({
    reducer: { 
        counter: counterReducer,
        contacts: contactReducer,
    },
});