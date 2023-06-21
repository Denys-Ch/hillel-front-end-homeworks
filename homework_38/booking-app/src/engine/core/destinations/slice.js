import { createSlice } from '@reduxjs/toolkit';

const destinations = createSlice({
    name: 'destinations',
    initialState: {
        items: [], loading: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setItems, setLoading } = destinations.actions;
export const items = (state) => state.destinations.items;
export const loading = (state) => state.destinations.loading;
export default destinations.reducer;
