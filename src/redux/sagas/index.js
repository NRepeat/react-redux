import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { getAllSuperherosSaga } from './superheroSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_ALL_SUPERHEROS_REQUEST, getAllSuperherosSaga)
}

export default rootSaga;