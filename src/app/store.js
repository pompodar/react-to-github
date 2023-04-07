import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import addressReducer from '../features/address/addressSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        address: addressReducer
    }
})