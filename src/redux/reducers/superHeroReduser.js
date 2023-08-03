import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  superheros: [],
  isLoading: false,
  error: null,
};

export default function superheroReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_SUPERHEROS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ACTION_TYPES.GET_ALL_SUPERHEROS_SUCCESS: {
      const { payload: superheros } = action;
      return {
        ...state,
        isLoading: false,
        superheros:  superheros,
      };
    }
    case ACTION_TYPES.GET_ALL_SUPERHEROS_ERROR: {
      const { payload: error } = action;
      return { ...state, isLoading: false, error };
    }
    default:
      return state;
  }
}