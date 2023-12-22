import {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESS,
  INCREMENT_ERROR,
  DECREMENT_REQUEST,
  DECREMENT_SUCCESS,
  DECREMENT_ERROR,
} from "../actions/countAction";

const initState = {
  loading: false,
  number: 0,
};

const countReducer = (state = initState, action = {}) => {
  switch (action?.type) {
    case INCREMENT_REQUEST: {
      return { ...state, loading: true };
    }
    case INCREMENT_SUCCESS: {
      return { ...state, loading: false, number: state.number + 1 };
    }
    case INCREMENT_ERROR: {
      return { ...state, loading: false };
    }
    case DECREMENT_REQUEST: {
      return { ...state, loading: true };
    }
    case DECREMENT_SUCCESS: {
      return { ...state, loading: false, number: state.number - 1 };
    }
    case DECREMENT_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default countReducer;
