import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'taskHandler',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = action.payload;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            state.items.splice(itemIndex, 1);
        },
        changeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            state.items[itemIndex].text = prompt('Введите текст');
        },
        checkItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            const currentCheckedState = state.items[itemIndex].isChecked;
            state.items[itemIndex].isChecked = !currentCheckedState;
        }
    }
});

export const newItems = state => state.taskHandler.items;
export const taskCount = state => state.taskHandler.items.length;
export const { addItem, removeItem, changeItem, checkItem } = taskSlice.actions;
export default taskSlice.reducer;