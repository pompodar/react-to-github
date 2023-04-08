import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    count: ""
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: (state) => {
            state.count = "";
        },
        incrementByAmount: (state, action) => {
            state.count = action.payload;

            const starCountRef = database.ref('resume/');

            starCountRef.update({
                counter: action.payload,
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

export const { reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;