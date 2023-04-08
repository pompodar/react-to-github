import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    working: ""
}

export const work2Slice = createSlice({
    name: 'work2',
    initialState,
    reducers: {
        reset: (state) => {
            state.working = "";
        },
        incrementByAmount: (state, action) => {
            state.working = action.payload;
            const starCountRef = database.ref('resume/');

            starCountRef.update({
                work2: action.payload,
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

export const {reset, incrementByAmount} = work2Slice.actions;

export default work2Slice.reducer;