import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    pic: ""
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        reset: (state) => {
            state.pic = "";
        },
        incrementByAmount: (state, action) => {
            state.pic = action.payload;
            console.log(action.payload);

            const starCountRef = database.ref('resume/');

            starCountRef.update({
                photo: action.payload,
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

export const { reset, incrementByAmount } = photoSlice.actions;

export default photoSlice.reducer;