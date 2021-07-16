import { all } from 'redux-saga/effects'

import userSaga from './fetchUserSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}