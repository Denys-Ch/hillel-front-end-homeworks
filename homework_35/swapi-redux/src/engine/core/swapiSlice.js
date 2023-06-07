import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
    name: 'requestHandler',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [
                ...state.items,
                { id: Math.random(), text: action.payload[0], URLController: action.payload[1], URLId: action.payload[2] }
            ];
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            state.items.splice(itemIndex, 1);
        }
    }
});

export const newItems = state => state.requestHandler.items;
export const { addItem, removeItem } = requestSlice.actions;
export default requestSlice.reducer;