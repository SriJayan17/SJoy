import { combineReducers } from "redux";
import AlertReducer from './AlertReducer';
import loadingReducer from "./loadingReducer";
import messageReducer from "./messageReducer";
import userReducer from './userReducer';
import usersReducer from "./usersReducer";
import dmuserReducer from "./dmuserReducer";
const rootReducer = combineReducers({
    alert:AlertReducer,
    user:userReducer,
    users:usersReducer,
    messages:messageReducer,
    loading:loadingReducer,
    dmuser:dmuserReducer
})

export default rootReducer;