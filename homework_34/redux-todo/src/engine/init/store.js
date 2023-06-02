import { configureStore } from '@reduxjs/toolkit';
import taskHandler from '../core/taskSlice';

export const store = configureStore({
    reducer: {
        taskHandler
    }
});