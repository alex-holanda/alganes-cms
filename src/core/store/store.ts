import { Middleware } from "redux";

import { configureStore, isRejected } from "@reduxjs/toolkit";

import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.store";

import authReducer from "./Auth.slice";
import { Info } from "app/components/Info";

const observeActions: Middleware = () => (next) => (action) => {
  if (isRejected(action)) {
    const ignoredActions = ["auth/fetchUser/rejected"];

    const shouldNotify = !ignoredActions.includes(action.type);

    if (shouldNotify) {
      Info({
        title: "Error",
        description: action.error.message,
      });
    }
  }

  next(action);
};

export function createAppStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      post: postReducer,
      editor: editorReducer,
    },
    middleware: function (getDefaultMiddlewares) {
      return getDefaultMiddlewares().concat(observeActions);
    },
  });
}

const store = createAppStore();

export default store;
