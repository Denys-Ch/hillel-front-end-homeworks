import { configureStore } from '@reduxjs/toolkit';
import counter from '../core/counterSlice';

export const store = configureStore({
    reducer: {
        counter
    }
});