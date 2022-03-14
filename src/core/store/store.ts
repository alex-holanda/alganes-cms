import { configureStore } from "@reduxjs/toolkit";

import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.store";

import authReducer from "./Auth.slice";

export function createAppStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      post: postReducer,
      editor: editorReducer,
    },
  });
}

const store = createAppStore();

export default store;
