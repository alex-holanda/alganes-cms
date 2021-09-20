import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";
import usePosts from "../../core/hooks/usePosts";

export function HomeView() {
  usePageTitle("Home");
  const { paginatedPosts, loading, fetchPosts } = usePosts();

  return (
    <DefaultLayout>
      <button
        onClick={() => {
          fetchPosts({ page: 1 });
        }}
      >
        Add fake post
      </button>

      {loading ? "carregando" : "finalizado"}
      <hr />

      {paginatedPosts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

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
