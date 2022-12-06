import {combineReducers} from "redux";
import {positionReducers} from "./positions/position-reducers"
import {filtersReducers} from "./filters/filters-reducers"

export const rootReducer = combineReducers({
    positions: positionReducers,
    filters: filtersReducers,
});
