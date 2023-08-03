import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  task: [],
};

export default function toDoReduser(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADDTODOTASK: {
      const newTask = [...state.task, action.payload];

      return { ...state, task: newTask };
    }

    default:
      return state;
  }
}
