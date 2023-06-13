import { put, select } from 'redux-saga/effects';
import { changeItem } from '../../taskSlice';

export function* callEditTodoWorker(action) {
    const id = action.payload;
    yield put(changeItem(id));
    const stateItems = yield select();
    const items = stateItems.taskHandler.items;
    localStorage.setItem('items', JSON.stringify(items));
}