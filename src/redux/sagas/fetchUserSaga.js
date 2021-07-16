import { put, takeEvery, call, takeLatest, all } from "redux-saga/effects";

import {
  setLoading,
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  setCreateData,
  setDeleteData,
  setUpdateData,
} from "../action";
import { api } from "../../constants";

function getPosts() {
  return fetch(api.url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const addPost = (values) => {
  return fetch(api.url, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const deletePost = (id) => {
  return fetch(`${api.url}/${id}`, {
    method: "DELETE",
  });
};

const updatePost = (values) => {
  return fetch(`${api.url}/${values.id}`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

function* fetchPosts() {
  try {
    yield put(setLoading(true));
    const response = yield call(getPosts);
    if (response.status >= 200 && response.status < 300) {
      const posts = yield response.json();

      yield put({ type: "GET_ALL_POSTS_DATA", data: posts });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: "SET_ERROR", data: e });
  } finally {
    yield put(setLoading(false));
  }
}

function* createPost(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(addPost, action.data);
    if (response.status >= 200 && response.status < 300) {
      const result = yield response.json();
      yield put(setCreateData(result));
      yield put({ type: FETCH_POSTS });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: "SET_ERROR", data: e });
  } finally {
    yield put(setLoading(false));
  }
}

function* deletePosts(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(deletePost, action.data);
    if (response.status >= 200 && response.status < 300) {
      const result = yield response.json();
      yield put(setDeleteData(result));
      yield put({ type: FETCH_POSTS });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: "SET_ERROR", data: e });
  } finally {
    yield put(setLoading(false));
  }
}

function* updatePosts(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(updatePost, action.data);
    if (response.status >= 200 && response.status < 300) {
      const result = yield response.json();
      yield put(setUpdateData(result));
      yield put({ type: FETCH_POSTS });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: "SET_ERROR", data: e });
  } finally {
    yield put(setLoading(false));
  }
}

function* userSaga() {
  yield all([
    takeEvery(FETCH_POSTS, fetchPosts),
    takeLatest(ADD_POST, createPost),
    takeLatest(DELETE_POST, deletePosts),
    takeLatest(UPDATE_POST, updatePosts),
  ]);
}

export default userSaga;
