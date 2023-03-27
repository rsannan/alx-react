import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/uiActionTypes";
import { Map } from "immutable";

const defaultState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return defaultState.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return defaultState.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return defaultState.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return defaultState.set("isUserLoggedIn", false);
    case LOGOUT:
      return defaultState.set("isUserLoggedIn", false);
    default:
      return state;
  }
}
