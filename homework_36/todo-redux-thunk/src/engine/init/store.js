import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import taskHandler from '../core/taskSlice';

export const store = configureStore({
    reducer: {
        taskHandler
    },
    middleware: [
        thunk
    ]
});