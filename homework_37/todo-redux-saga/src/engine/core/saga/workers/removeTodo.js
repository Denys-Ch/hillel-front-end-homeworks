import { put, select } from 'redux-saga/effects';
import { removeItem } from '../../taskSlice';

export function* callRemoveTodoWorker(action) {
    const id = action.payload;
    yield put(removeItem(id));
    const stateItems = yield select();
    const items = stateItems.taskHandler.items;
    const newItems = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newItems));
}

