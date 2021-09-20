import {
  createAsyncThunk,
  isPending,
  isFulfilled,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

import { Post, PostService } from "alex-holanda-sdk";

interface PostSliceState {
  paginated?: Post.Paginated;
  fetching: boolean;
  counter: number;
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
  counter: 0,
  fetching: false,
};

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const increment = createAction("post/increment");

export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.counter++;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload;
    })
    .addMatcher(isPending, (state) => {
      state.fetching = true;
    })
    .addMatcher(isFulfilled, (state) => {
      state.fetching = false;
    });
});
