import actions from "./courseActionTypes";

export function selectCourse(index) {
  return { ...actions[0], index: index };
}

export function unSelectCourse(index) {
  return { ...actions[1], index: index };
}
