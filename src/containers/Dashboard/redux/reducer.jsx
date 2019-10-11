import {
  GET_ALL_APPLICATION,
  GET_ALL_APPLICATION_PENDING,
  GET_ALL_APPLICATION_ERROR
} from "./types";

// set initial state
const initialState = {
  applications: [],
  applicationPending: false,
  applicationError: null
};

//reducer
export default (state = initialState, action = {}) => {
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
};
