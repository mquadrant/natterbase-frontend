import axios from "./../../../utils/API";
import * as types from "./types";

export function getApplicationAction(payload) {
  return { type: types.GET_ALL_APPLICATION, payload };
}

export function getApplicationPending() {
  return { type: types.GET_ALL_APPLICATION_PENDING };
}

export function getApplicationError(error) {
  return { type: types.GET_ALL_APPLICATION_ERROR, error };
}

export const getApplications = () => {
  return dispatch => {
    dispatch(getApplicationPending());
    return axios
      .get("/api/interview/get-applications")
      .then(res => {
        dispatch(getApplicationAction(res.data.data));
        return res.data.data;
      })
      .catch(error => {
        dispatch(getApplicationError(error));
        throw error;
      });
  };
};
