import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  task: [],
};

export default function toDoReduser(state = initialState, action) {
  console.log(state.task);
  switch (action.type) {
    case ACTION_TYPES.ADDTODOTASK: {
      const newTask = [...state.task, action.payload];

      console.log(newTask, "newTask");
      return { ...state, task: newTask };
    }

    default:
      return state;
  }
}
