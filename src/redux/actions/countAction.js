const INCREMENT_REQUEST = "INCREMENT_REQUEST";
const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
const INCREMENT_ERROR = "INCREMENT_ERROR";

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

export {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESS,
  INCREMENT_ERROR,
  triggerIncrementRequest,
  triggerIncrementSuccess,
  triggerIncrementError,
};
