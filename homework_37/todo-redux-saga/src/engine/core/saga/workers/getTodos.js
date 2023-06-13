import { put, call } from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callGetTodosWorker() {
    const response = yield call([localStorage, 'getItem'], 'items');
    yield put (addItem(JSON.parse(response) || []));
}