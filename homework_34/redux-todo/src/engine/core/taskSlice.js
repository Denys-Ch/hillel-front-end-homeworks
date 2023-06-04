import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'taskHandler',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [
                ...state.items,
                { id: Math.random(), text: action.payload, isChecked: false }
            ];
        }
    }
});

export const newItems = state => state.taskHandler.items;
export const taskCount = state => state.taskHandler.items.length;
export const { addItem } = taskSlice.actions;
export default taskSlice.reducer;