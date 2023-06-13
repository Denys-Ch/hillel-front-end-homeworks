import { put, call, select } from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callAddTodoWorker(action) {
    const stateItems = yield select();
    const newItems = [
        ...stateItems.taskHandler.items,
        { id: Math.random(), text: action.payload.task, isChecked: false }
    ]
    yield put(addItem(newItems));
    yield call([localStorage, 'setItem'],'items', JSON.stringify(newItems));
    action.payload.task = '';
}
