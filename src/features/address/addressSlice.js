import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    addr: ""
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        reset: (state) => {
            state.addr = "";
        },
        incrementByAmount: (state, action) => {
            state.addr = action.payload;
            const starCountRef = database.ref('resume/');

            starCountRef.set({
                address: action.payload,
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

export const {reset, incrementByAmount} = addressSlice.actions;

export default addressSlice.reducer;