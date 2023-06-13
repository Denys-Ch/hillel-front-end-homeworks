import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import taskHandler from '../core/taskSlice';

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        taskHandler
    },
    middleware: [
        sagaMiddleware
    ]
});
sagaMiddleware.run(
    rootSaga
)