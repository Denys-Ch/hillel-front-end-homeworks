import { takeEvery } from 'redux-saga/effects';
import { callGetDestinationWorker } from './workers/callGetDestinationWorker';
import { destinationsAsyncActions } from './asyncActions';

export function* destinationsWatcher() {
    yield takeEvery(destinationsAsyncActions.getDestinationsAsync.type, callGetDestinationWorker);
}
