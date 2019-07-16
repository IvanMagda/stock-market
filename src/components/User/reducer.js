import { LOG_IN, LOG_OUT, ERROR, RESET_ERROR, AUTH } from "./actions";

const defaultState = { auth: false, error: "" };
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return defaultState;
    case LOG_IN:
    case AUTH:
      return { ...state, ...action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case RESET_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
