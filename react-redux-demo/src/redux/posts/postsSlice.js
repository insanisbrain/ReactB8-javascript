import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: []
}

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
  console.log("fetchPosts");
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload.data
    })
  },
});

export const selectPosts = (state) => state.posts.data;
export default postsSlice.reducer