import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'taskHandler',
    initialState: {
        items: [],
        taskCount: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [
                ...state.items,
                { id: Math.random(), text: action.payload, isChecked: false }
            ];
            state.taskCount = state.taskCount + 1;
        }
    }
});

export const newItems = state => state.taskHandler.items;
export const taskCount = state => state.taskHandler.taskCount;
export const { addItem, setLocalStorage } = taskSlice.actions;
export default taskSlice.reducer;