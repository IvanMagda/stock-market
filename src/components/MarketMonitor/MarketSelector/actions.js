import { callApi } from "../../Api/utils";

export const CHANGE_TYPE = "CHANGE_TYPE";
export const SYMBOLS = "SYMBOLS";
export const changeType = type => async dispatch => {
  dispatch({ type: CHANGE_TYPE, payload: type });
  const data = await dispatch(callApi(`symbols/indices/ticker/${type}`));
  dispatch({ type: SYMBOLS, payload: data.symbols });
};

export const CHANGE_PAIR = "CHANGE_PAIR";
export const HISTORY = "HISTORY";
export const changePair = currency => async (dispatch, getState) => {
  dispatch({ type: CHANGE_PAIR, payload: currency });
  const {
    pair: { crypto, fiat },
    type
  } = getState().market;
  if (crypto && fiat) {
    const data = await dispatch(
      callApi(
        `indices/${type}/history/${crypto + fiat}?period=monthly&format=json`
      )
    );
    dispatch({ type: HISTORY, payload: { [crypto + fiat]: data } });
  }
};
