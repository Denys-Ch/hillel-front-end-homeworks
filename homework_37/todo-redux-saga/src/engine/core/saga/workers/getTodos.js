import {put, call} from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callGetTodosWorker() {
    const response = yield call(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    })
    yield put (addItem(response));
}