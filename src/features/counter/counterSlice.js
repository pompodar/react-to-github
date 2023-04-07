import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
});

export const { reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;