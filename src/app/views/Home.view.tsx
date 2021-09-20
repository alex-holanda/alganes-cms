import { useDispatch, useSelector } from "react-redux";

import { increment } from "../../core/store/Post.slice";

import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";
import selectPostsCounter from "../../core/selectors/selectPostsCounter";

export function HomeView() {
  usePageTitle("Home");
  const dispatch = useDispatch();
  const counter = useSelector(selectPostsCounter);

  return (
    <DefaultLayout>
      <div>
        <button onClick={() => dispatch(increment())}>Disparar ação</button>
        {counter}
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
