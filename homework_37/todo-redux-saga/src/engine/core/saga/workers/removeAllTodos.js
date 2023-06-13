import { put, call } from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callRemoveAllWorker() {
    yield put(addItem([]));
    yield call([localStorage, 'setItem'],'items', JSON.stringify([]));
}