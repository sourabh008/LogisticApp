export const FETCH_POSTS = "FETCH_POSTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR="SET_ERROR"
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SET_CREATE_DATA = "SET_CREATE_DATA";
export const SET_UPDATE_DATA = "SET_UPDATE_DATA";
export const SET_DELETE_DATA = "SET_DELETE_DATA";
export const GET_ALL_POSTS_DATA="GET_ALL_POSTS_DATA"

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    data: loading,
  };
};

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data: data,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    data: id,
  };
};

export const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    data: data,
  };
};

export const setCreateData = (data) => {
  return {
    type: SET_CREATE_DATA,
    data: data,
  };
};

export const setUpdateData = (data) => {
  return {
    type: SET_UPDATE_DATA,
    data: data,
  };
};

export const setDeleteData = (data) => {
  return {
    type: SET_DELETE_DATA,
    data: data,
  };
};
