import { Map } from "immutable";

import {
  SET_LOADING,
  SET_DELETE_DATA,
  SET_UPDATE_DATA,
  SET_CREATE_DATA,
  SET_ERROR,
  GET_ALL_POSTS_DATA,
} from "../action";

const initialState = Map({
  posts: [],
  error: "",
  loading: false,
  createdData: {},
  deletedData: {},
  updatedData: {},
});

const actionsMap = {
  
  [SET_LOADING]: (state, { data }) => state.setIn(["loading"], data),
  [GET_ALL_POSTS_DATA]: (state, { data }) => state.setIn(["posts"], data),
  [SET_ERROR]: (state, { data }) => state.setIn(["error"], data),
  [SET_UPDATE_DATA]: (state, { data }) => state.setIn(["updatedData"], data),
  [SET_CREATE_DATA]: (state, { data }) => state.setIn(["createData"], data),
  [SET_DELETE_DATA]: (state, { data }) => state.setIn(["deletedData"], data),
};

export function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
