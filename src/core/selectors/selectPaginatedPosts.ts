import { Store } from "../store";

export default function selectPaginatedPosts(state: Store.RootState) {
  return state.post.paginated;
}
