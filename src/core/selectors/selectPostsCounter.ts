import { Store } from "../store";

export default function selectPostsCounter(state: Store.RootState) {
  return state.post.counter;
}
