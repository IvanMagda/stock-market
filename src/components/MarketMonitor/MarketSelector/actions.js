import { callProxyApi } from "../../Api/utils";

export const CHANGE_PERIOD = "CHANGE_PERIOD";
export const SYMBOLS = "SYMBOLS";
export const getGlobalMarket = type => async dispatch => {
  const data = await dispatch(callProxyApi(`symbols/indices/ticker/${type}`));
  dispatch({ type: SYMBOLS, payload: data.symbols });
};

export const changePeriod = period => async dispatch => {
  dispatch({ type: CHANGE_PERIOD, payload: period });
  dispatch(changePair());
};

export const CHANGE_PAIR = "CHANGE_PAIR";
export const CURRENT_CHART = "CURRENT_CHART";
export const HISTORY = "HISTORY";
export const ERROR_PROXY = "ERROR_PROXY";
export const changePair = currency => async (dispatch, getState) => {
  currency && dispatch({ type: CHANGE_PAIR, payload: currency });
  const {
    pair: { crypto, fiat },
    period
  } = getState().market;
  if (crypto && fiat && period) {
    const data = await dispatch(
      callProxyApi(
        `indices/global/history/${crypto + fiat}?period=${period}&format=json`
      )
    );
    if (Array.isArray(data)) {
      dispatch({ type: HISTORY, payload: data });
      dispatch({ type: CURRENT_CHART, payload: crypto + fiat });
    } else {
      dispatch({ type: ERROR_PROXY, payload: data });
    }
  }
};
