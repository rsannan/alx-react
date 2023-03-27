import {
  SELECT_COURSE,
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
const defaultState = [];

export default function courseReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return { ...course, isSelected: false };
      });

    case SELECT_COURSE:
      return state
        .filter((course) => course.id === action.index)
        .map((course) => {
          return { ...course, isSelected: true };
        });

    case UNSELECT_COURSE:
      return state
        .filter((course) => course.id === action.index)
        .map((course) => {
          return { ...course, isSelected: false };
        });
    default:
      return state;
  }
}
