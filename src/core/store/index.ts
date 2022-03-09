import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth.slice";
import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.store";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    editor: editorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
