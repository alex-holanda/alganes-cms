import { store } from "core/store";

export namespace Store {
  export type AppStore = typeof store;

  export type RootState = ReturnType<typeof store.getState>;

  export type AppDispatch = typeof store.dispatch;
}
