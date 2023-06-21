import { takeEvery } from 'redux-saga/effects';
import { callGetHotelsWorker } from './workers/callGetHotelsWorker';
import { hotelsAsyncActions } from './asyncActions';

export function* hotelsWatcher() {
    yield takeEvery(hotelsAsyncActions.getHotelsAsync.type, callGetHotelsWorker);
}
