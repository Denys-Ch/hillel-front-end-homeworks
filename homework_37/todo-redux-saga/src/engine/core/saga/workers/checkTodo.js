import { put, select } from 'redux-saga/effects';
import { checkItem } from '../../taskSlice';

export function* callCheckTodoWorker(action) {
    const id = action.payload;
    yield put(checkItem(id));
    const stateItems = yield select();
    const items = stateItems.taskHandler.items;
    localStorage.setItem('items', JSON.stringify(items));
}