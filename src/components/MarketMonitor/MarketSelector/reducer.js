import { CHANGE_TYPE, CHANGE_PAIR, SYMBOLS, HISTORY } from "./actions";
import { IS_LOADING } from "../../Api/utils";

const defaultState = {
  type: "",
  pair: { crypto: "", fiat: "" },
  isLoading: false,
  symbols: [],
  history: {}
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case HISTORY:
      return { ...state, history: { ...state.history, ...action.payload } };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SYMBOLS:
      return { ...state, symbols: action.payload };
    case CHANGE_TYPE:
      return { ...state, type: action.payload };
    case CHANGE_PAIR:
      return { ...state, pair: { ...state.pair, ...action.payload } };
    default:
      return state;
  }
};
