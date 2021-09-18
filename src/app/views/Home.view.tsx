import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../core/store/Post.slice";
import selectPaginatedPosts from "../../core/selectors/selectPaginatedPosts";

import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";

export function HomeView() {
  usePageTitle("Home");
  const dispatch = useDispatch();
  const paginatedPosts = useSelector(selectPaginatedPosts);

  return (
    <DefaultLayout>
      <div>
        <button onClick={() => dispatch(fetchPosts({ page: 0 }))}>
          Add fake post
        </button>
        {paginatedPosts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <ErrorBoundary component={"top tags"}>
          <UserTopTags />
        </ErrorBoundary>
        <ErrorBoundary component={"ganhos"}>
          <UserEarnings />
        </ErrorBoundary>
      </div>
      <UserPerformance />

      <ErrorBoundary component={"lista de posts"}>
        <PostsList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
