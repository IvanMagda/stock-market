export const LOG_IN = "LOG_IN";
export const login = () => dispatch =>
  dispatch({ type: LOG_IN, payload: { auth: true } });

export const LOG_OUT = "LOG_OUT";
export const logout = () => dispatch =>
  dispatch({ type: LOG_OUT });

export const ERROR = "ERROR";
export const error = message => dispatch =>
  dispatch({ type: ERROR, payload: message });

export const AUTH = "AUTH";
export const auth = user => dispatch =>
    dispatch({ type: AUTH, payload: { auth: user } });

export const RESET_ERROR = "RESET_ERROR";
export const resetError = () => dispatch =>
  dispatch({ type: RESET_ERROR });
