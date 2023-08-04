import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../api';

const SLICE_NAME = 'superhero';

const getAllSuperheros = createAsyncThunk(
  `${SLICE_NAME}/getallsuperheros`,
  async (userData, thunkAPI) => {
    try {
      const { data: {data: superhero}} = await API.getSuperheroAll();

      return superhero;
    } catch (error) {
        console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  superhero: [],
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllSuperheros.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllSuperheros.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });

    builder.addCase(getAllSuperheros.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // те що кинули у rejectWithValue
    })
  }
})

const { reducer: superheroReducer } = userSlice;

export { getAllSuperheros }

export default superheroReducer;