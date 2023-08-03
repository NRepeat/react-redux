import { put } from 'redux-saga/effects'
import * as API from '../../api';
import * as SuperheroActionCreators from '../actions/actionSuperheroCreator';

export function* getAllSuperherosSaga() {
  try {
    const response = yield API.getSuperheroAll();
    const { data: { data: superheros } } = response;
    console.log(superheros)
    yield put(SuperheroActionCreators.getAllSuperherosSuccess(superheros))
  } catch (error) {
    yield put(SuperheroActionCreators.getAllSuperherosError(error))
  }
}