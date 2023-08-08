import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../api/index";

const SLICE_NAME = "superhero";

const createSuperhero = createAsyncThunk(
  `${SLICE_NAME}/createSuperhero`,
  async (superheroData, thunkApi) => {
    try {
      const {data:{data:allSHeroes}} = await API.SuperheroAPI.getSuperheroAll();
      console.log(allSHeroes);
      return allSHeroes;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  allSuperheros: [],
  isLoading: false,
  error: null,
};

export const superheroSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {}, // You can add any other reducers here if needed
  extraReducers: (builder) => {
    builder.addCase(createSuperhero.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createSuperhero.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action)
      state.allSuperheros.push(action.payload);
    });

    builder.addCase(createSuperhero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: superheroReducer } = superheroSlice;

export { createSuperhero };
export default superheroReducer;
