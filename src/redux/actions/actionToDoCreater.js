import ACTION_TYPES from "./actionTypes";

export function addTask(task) {
  return {
    type: ACTION_TYPES.ADDTODOTASK,
    payload: task,
  };
}
