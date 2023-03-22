import { MARK_AS_READ } from "./notificationActionTypes";
import { SET_TYPE_FILTER } from "./notificationActionTypes";
import { NotificationTypeFilters } from "./notificationActionTypes";

export function markAsAread(index) {
  return { type: MARK_AS_READ, index: index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}
