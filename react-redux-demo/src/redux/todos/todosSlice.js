import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: []
}

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return response;
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload.data;
    })
  }
})

export default todosSlice.reducer