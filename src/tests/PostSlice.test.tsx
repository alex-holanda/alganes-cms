import "@testing-library/react";

import { Store, createAppStore } from "core/store";

import { fetchPosts } from "core/store/Post.store";

let store: Store.AppStore;

describe("Post slice", () => {
  beforeEach(() => {
    store = createAppStore();
  });

  // unitário
  it("start with empty array on content", () => {
    const state = store.getState().post;

    expect(state.paginated?.content).toHaveLength(0);
  });

  // integração
  it("updates state after fetchPosts dispatch", async () => {
    await store.dispatch(fetchPosts({}));
    const state = store.getState().post;

    expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
  });
});
