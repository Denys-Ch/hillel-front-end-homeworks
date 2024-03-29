import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state) => {
            state.value = state.value + 1;
        },
        decrease: (state) => {
            state.value = state.value - 1;
        }
    }
});

export const value = state => state.counter.value;
export const { increase, decrease, } = counterSlice.actions;
export default counterSlice.reducer;