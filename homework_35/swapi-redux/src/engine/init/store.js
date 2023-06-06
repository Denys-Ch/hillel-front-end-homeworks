import { configureStore } from '@reduxjs/toolkit';
import requestHandler from '../core/swapiSlice';

export const store = configureStore({
    reducer: {
        requestHandler
    }
});