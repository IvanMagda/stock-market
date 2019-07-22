import axios from "axios";

const PROXY_ENDPOINT = "https://centering-aegis-246500.appspot.com/proxy/";
const FAVORITES_ENDPOINT =
  "https://centering-aegis-246500.appspot.com/favorites/";

export const IS_LOADING = "IS_LOADING";
export const callProxyApi = path => async dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  const { data } = await axios.get(
    `${PROXY_ENDPOINT}?path=${encodeURI(path)}`,
    { crossDomain: true }
  );
  dispatch({ type: IS_LOADING, payload: false });
  return data;
};

export const FAVORITES = "FAVORITES";
export const callGetFavorites = email => async dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  const { data } = await axios.get(
    `${FAVORITES_ENDPOINT}?userEmail=${encodeURI(email)}`,
    { crossDomain: true }
  );
  dispatch({ type: IS_LOADING, payload: false });
  dispatch({ type: FAVORITES, payload: Object.values(data || {}) });
};

export const callFavorites = payload => async (dispatch, getState) => {
  const { auth: email } = getState().user;
  dispatch({ type: IS_LOADING, payload: true });
  dispatch({ type: FAVORITES, payload: payload });
  await axios.post(`${FAVORITES_ENDPOINT}?userEmail=${encodeURI(email)}`, {
    favorites: payload
  });
  dispatch({ type: IS_LOADING, payload: false });
};
