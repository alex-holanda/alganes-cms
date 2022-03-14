import { Store } from "../store";

export default function selectPostsFetching(state: Store.RootState) {
  return state.post.fetching;
}
