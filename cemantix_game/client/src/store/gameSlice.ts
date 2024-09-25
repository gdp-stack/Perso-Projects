
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const checkWord = createAsyncThunk(
  'game/checkWord',
  async (word: string) => {
    const response = await axios.post('http://localhost:4000/guess', { word });
    return response.data;
  }
);

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    result: '',
    temperature: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkWord.fulfilled, (state, action) => {
      state.result = action.payload.result;
      state.temperature = action.payload.temperature;
    });
  },
});

export default gameSlice.reducer;
