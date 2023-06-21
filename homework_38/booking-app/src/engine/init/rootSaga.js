import { all, call } from 'redux-saga/effects';
import { destinationsWatcher } from '../core/destinations/saga/watcher';
import { hotelsWatcher } from '../core/hotels/saga/watcher';

export function* rootSaga() {
    yield all([
        call(destinationsWatcher),
        call(hotelsWatcher),
    ]);
}
