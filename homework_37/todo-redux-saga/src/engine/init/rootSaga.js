import { all, call } from 'redux-saga/effects';
import { todosWatcher } from '../core/saga/watcher';

export function* rootSaga() {
    yield all([
        call(todosWatcher)
    ])
}