import axios from "./../../../utils/API";
import * as types from "./types";

/* APPLICATIONS ACTIONS */
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
        dispatch(getApplicationAction(res.data.applications));
        return res.data;
      })
      .catch(error => {
        dispatch(getApplicationError(error));
        throw error;
      });
  };
};

/* STATISTICS ACTIONS */
export function getStatisticsAction(payload) {
  return { type: types.GET_STATISTICS, payload };
}

export function getStatisticsPending() {
  return { type: types.GET_STATISTICS_PENDING };
}

export function getStatisticsError(error) {
  return { type: types.GET_STATISTICS_PENDING, error };
}

export const getStatistics = () => {
  return dispatch => {
    dispatch(getStatisticsPending());
    return axios
      .get("/api/interview/get-statistics")
      .then(res => {
        dispatch(getStatisticsAction(res.data.statistics));
        return res.data;
      })
      .catch(error => {
        dispatch(getStatisticsError(error));
        throw error;
      });
  };
};
