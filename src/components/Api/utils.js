import axios from "axios";

export const IS_LOADING = "IS_LOADING";
export const callProxyApi = path => async dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  const { data } = await axios.get(
    `https://centering-aegis-246500.appspot.com/proxy/?path=${encodeURI(path)}`,
    { crossDomain: true }
  );
  dispatch({ type: IS_LOADING, payload: false });
  return data;
};

export const callGetFavorites = email => async dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  const { data } = await axios.get(
    `http://localhost:8080/favorites/?userEmail=${encodeURI(email)}`,
    { crossDomain: true }
  );
  dispatch({ type: IS_LOADING, payload: false });
  dispatch({ type: "FAVORITES", payload: Object.values(data) });
};
