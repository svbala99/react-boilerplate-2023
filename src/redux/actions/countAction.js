const INCREMENT_REQUEST = "INCREMENT_REQUEST";
const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
const INCREMENT_ERROR = "INCREMENT_ERROR";

const DECREMENT_REQUEST = "DECREMENT_REQUEST";
const DECREMENT_SUCCESS = "DECREMENT_SUCCESS";
const DECREMENT_ERROR = "DECREMENT_ERROR";

const triggerIncrementRequest = (payload) => {
  return {
    type: INCREMENT_REQUEST,
    payload,
  };
};
const triggerIncrementSuccess = (response) => {
  return {
    type: INCREMENT_SUCCESS,
    response,
  };
};
const triggerIncrementError = (error) => {
  return {
    type: INCREMENT_ERROR,
    error,
  };
};

const triggerDecrementRequest = (payload) => {
  return {
    type: DECREMENT_REQUEST,
    payload,
  };
};
const triggerDecrementSuccess = (response) => {
  return {
    type: DECREMENT_SUCCESS,
    response,
  };
};
const triggerDecrementError = (error) => {
  return {
    type: DECREMENT_ERROR,
    error,
  };
};

export {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESS,
  INCREMENT_ERROR,
  DECREMENT_REQUEST,
  DECREMENT_SUCCESS,
  DECREMENT_ERROR,
  triggerIncrementRequest,
  triggerIncrementSuccess,
  triggerIncrementError,
  triggerDecrementRequest,
  triggerDecrementSuccess,
  triggerDecrementError,
};
