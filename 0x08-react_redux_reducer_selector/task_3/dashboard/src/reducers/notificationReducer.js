import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: "DEFAULT",
};

export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((noti) => {
          return { ...noti, isRead: false };
        }),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((noti) => {
          if (noti.id === action.index) {
            return { ...noti, isRead: true };
          }
        }),
      };

    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };

    default:
      return state;
  }
}
