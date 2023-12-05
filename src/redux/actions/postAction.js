const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

const fetchPostsRequest = (payload) => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload,
  };
};
const fetchPostsSuccess = (response) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    response,
  };
};
const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    error,
  };
};

export {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
};
