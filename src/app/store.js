import { configureStore } from "@reduxjs/toolkit";
import aboutMeReducer from '../features/aboutMe/aboutMeSlice';
import photoReducer from '../features/photo/photoSlice';
import work1Reducer from '../features/work1/work1Slice';
import work2Reducer from '../features/work2/work2Slice';

export const store = configureStore({
    reducer: {
        photo: photoReducer,
        work1: work1Reducer,
        work2: work2Reducer,
        aboutMe: aboutMeReducer
    }
})