import { createSlice } from '@reduxjs/toolkit';

const hotels = createSlice({
    name: 'hotels',
    initialState: {
        cards: [],
    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        },
    },
});

export const { setCards } = hotels.actions;
export const cards = (state) => state.hotels.cards;
export default hotels.reducer;
