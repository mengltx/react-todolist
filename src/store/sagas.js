import { put, takeEvery } from 'redux-saga/effects';
import {GET_INIT_DATA} from './action_types.js';
import {init_data} from './action_creator.js';
import axios from "axios";

function* getInitData() {
    try {
        const response = yield axios.get('/list.json');
        const action = init_data(response.data);
        yield put(action);
    } catch (e) {
        console.error('error while getting /list.json');
    }
}

function* todoSaga() {
    yield takeEvery(GET_INIT_DATA, getInitData)
}

export default todoSaga
