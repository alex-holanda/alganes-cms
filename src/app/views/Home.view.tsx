import { usePageTitle } from "../../core/hooks";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
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
