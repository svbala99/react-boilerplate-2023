import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "../actions/postAction";

const initState = {
  loading: false,
  data: null,
};

const postReducer = (state = initState, action = {}) => {
  switch (action?.type) {
    case FETCH_POSTS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_POSTS_SUCCESS: {
      return { ...state, loading: false, data: action?.response };
    }
    case FETCH_POSTS_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default postReducer;
