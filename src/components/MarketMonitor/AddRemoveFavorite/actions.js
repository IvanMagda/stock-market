import { callFavorites } from "../../Api/utils";

export const updateFavorites = () => (dispatch, getState) => {
  const { currentChart, favorites } = getState().market;
  const newFavorites = favorites.includes(currentChart)
    ? favorites.filter(chart => chart !== currentChart)
    : favorites.concat([currentChart]);
  currentChart && dispatch(callFavorites(newFavorites));
};
