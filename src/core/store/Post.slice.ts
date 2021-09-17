import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { Post, PostService } from "alex-holanda-sdk";

interface PostSliceState {
  paginated?: Post.Paginated;
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post.Summary>) {
      state.paginated?.content?.push(action.payload);
    },
  },
});

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const postReducer = postSlice.reducer;
export const { addPost } = postSlice.actions;
