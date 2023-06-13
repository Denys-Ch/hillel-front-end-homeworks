import { put, call, select } from 'redux-saga/effects';
import { addItem } from '../../taskSlice';

export function* callAddTodoWorker(action) {
    const stateItems = yield select();
    const newItems = yield call(() => {
        const items = stateItems.taskHandler.items;
        const text = action.payload.task;
        return [...items,
        { id: Math.random(), text, isChecked: false }
        ];
    })
    yield put (addItem(newItems));
    localStorage.setItem('items', JSON.stringify(newItems));
    action.payload.task = '';
}
