import { combineReducers } from "redux";
import user from "../User/reducer";
import market from "../MarketMonitor/MarketSelector/reducer";
export default combineReducers({
  user,
  market
});
