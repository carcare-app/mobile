import { combineReducers } from "redux";

import user from "./user";
import cars from "./cars";
import gasStations from "./gasStations";

export default combineReducers({ user, cars, gasStations });
