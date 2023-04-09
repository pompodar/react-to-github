import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    working: ""
}

export const work1Slice = createSlice({
    name: 'work1',
    initialState,
    reducers: {
        reset: (state) => {
            state.working = "";
        },
        incrementByAmount: (state, action) => {
            state.working = action.payload;
            const starCountRef = database.ref('resume/');

            starCountRef.update({
                work1: action.payload,
            })
            .then(() => {
            console.log('Data written successfully!');
            })
            .catch((error) => {
            console.error('Error writing data:', error);
            });
        }
    }
});

export const {reset, incrementByAmount} = work1Slice.actions;

export default work1Slice.reducer;