import ACTION_TYPES from "./actionTypes";

export const getAllSuperherosRequest = (values) => ({
  type: ACTION_TYPES.GET_ALL_SUPERHEROS_REQUEST,
});

export const getAllSuperherosSuccess = (values) => ({
  type: ACTION_TYPES.GET_ALL_SUPERHEROS_SUCCESS,
  payload: values,
});

export const getAllSuperherosError = (error) => ({
  type: ACTION_TYPES.GET_ALL_SUPERHEROS_ERROR,
  payload: error,
});
