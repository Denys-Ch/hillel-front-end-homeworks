import { put, delay, call } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { api } from '../../../../config/axios';
import { links } from '../../../../config/routers';
import { setLoading } from '../../../destinations/slice';
import { setCards } from '../../slice';

export function* callGetHotelsWorker(action) {
    const { payload } = action;
    try {
        yield put(setLoading(true));
        const {
            // eslint-disable-next-line camelcase
            check_in: { $d: check_in },
            // eslint-disable-next-line camelcase
            check_out: { $d: check_out },
            adults,
            children,
        } = payload;
        const { data, status } = yield call(api.getHotels, {
            // eslint-disable-next-line camelcase
            check_in, check_out, adults, children,
        });
        if (status === 200) {
            yield put(setCards(data));
            yield delay(2000);
            yield put(push(links.hotels));
        }
        yield put(setLoading(false));
    } catch (e) {
        console.warn(e);
    }
}
