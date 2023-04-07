import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
});

export const { reset, incrementByAmount } = addressSlice.actions;

export default addressSlice.reducer;