import {
  GET_ALL_APPLICATION,
  GET_ALL_APPLICATION_PENDING,
  GET_ALL_APPLICATION_ERROR,
  GET_STATISTICS,
  GET_STATISTICS_PENDING,
  GET_STATISTICS_ERROR
} from "./types";

// set initial state
const applicationState = {
  applications: [],
  applicationPending: false,
  applicationError: null
};

//Reducer for applications
export function applicationReducer(state = applicationState, action = {}) {
  switch (action.type) {
    case GET_ALL_APPLICATION_PENDING:
      return {
        ...state,
        applicationPending: true
      };
    case GET_ALL_APPLICATION_ERROR:
      return {
        ...state,
        applicationError: action.error,
        applicationPending: false
      };
    case GET_ALL_APPLICATION:
      return {
        ...state,
        applications: action.payload,
        applicationPending: false
      };
    default:
      return state;
  }
}

// set initial state
const statisticState = {
  statistics: [],
  statisticsPending: false,
  statisticsError: null
};

//Reducer for statistics
export function statisticReducer(state = statisticState, action = {}) {
  switch (action.type) {
    case GET_STATISTICS_PENDING:
      return {
        ...state,
        statisticsPending: true
      };
    case GET_STATISTICS_ERROR:
      return {
        ...state,
        statisticsError: action.error,
        statisticsPending: false
      };
    case GET_STATISTICS:
      return {
        ...state,
        statistics: action.payload,
        statisticsPending: false
      };
    default:
      return state;
  }
}
