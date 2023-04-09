import { createSlice } from "@reduxjs/toolkit";
import {database} from '../../firebase';

const initialState = {
    about: ""
}

export const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState,
    reducers: {
        reset: (state) => {
            state.about = "";
        },
        incrementByAmount: (state, action) => {
            state.about = action.payload;

            const starCountRef = database.ref('resume/');

            starCountRef.update({
                aboutMe: action.payload,
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

export const { reset, incrementByAmount } = aboutMeSlice.actions;

export default aboutMeSlice.reducer;