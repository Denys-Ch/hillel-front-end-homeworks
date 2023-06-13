import { put } from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callRemoveAllWorker() {
    yield put(addItem([]));
    localStorage.setItem('items', JSON.stringify([]));
}