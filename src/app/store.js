import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import work1Reducer from '../features/work1/work1Slice';
import work2Reducer from '../features/work2/work2Slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        work1: work1Reducer,
        work2: work2Reducer,
    }
})