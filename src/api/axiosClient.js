import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 20000;

export async function getRequest(URL='') {
    if(URL?.length===0){
        return;
    }
  const response = await axiosClient.get(`${URL}`);
    return response;
}

export async function postRequest(URL='', payload) {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.post(`/${URL}`, payload);
    return response;
}

export async function patchRequest(URL='', payload) {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.patch(`/${URL}`, payload);
    return response;
}

export async function deleteRequest(URL='') {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.delete(`/${URL}`);
    return response;
}

/**
 * Request Wrapper with default success/error actions
 */
// const request = async function (options) {
//   const onSuccess = function (response) {
//     console.debug("Request Successful!", response);
//     return response.data;
//   };

//   const onError = function (error) {
//     console.error("Request Failed:", error.config);

//     if (error.response) {
//       // Request was made but server responded with something
//       // other than 2xx
//       console.error("Status:", error.response.status);
//       console.error("Data:", error.response.data);
//       console.error("Headers:", error.response.headers);
//     } else {
//       // Something else happened while setting up the request
//       // triggered the error
//       console.error("Error Message:", error.message);
//     }

//     return Promise.reject(error.response || error.message);
//   };

//   try {
//         const response = await axiosClient(options);
//         return onSuccess(response);
//     } catch (error) {
//         return onError(error);
//     }
// };

// export default request;
