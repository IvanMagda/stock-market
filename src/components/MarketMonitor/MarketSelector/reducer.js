import {
  CHANGE_PERIOD,
  CHANGE_PAIR,
  SYMBOLS,
  HISTORY,
  ERROR_PROXY,
  CURRENT_CHART
} from "./actions";
import { FAVORITES, IS_LOADING } from "../../Api/utils";

const defaultState = {
  period: "daily",
  pair: { crypto: "", fiat: "" },
  currentChart: "",
  isLoading: false,
  symbols: [],
  history: [],
  favorites: [],
  error: ""
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case FAVORITES:
      return { ...state, favorites: action.payload };
    case ERROR_PROXY:
      return { ...state, error: action.payload };
    case HISTORY:
      return { ...state, history: action.payload };
    case CURRENT_CHART:
      return { ...state, currentChart: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SYMBOLS:
      return { ...state, symbols: action.payload };
    case CHANGE_PERIOD:
      return { ...state, period: action.payload };
    case CHANGE_PAIR:
      return { ...state, pair: { ...state.pair, ...action.payload } };
    default:
      return state;
  }
};
