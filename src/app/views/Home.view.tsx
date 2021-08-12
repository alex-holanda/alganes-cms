import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import { UserPerformance } from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";

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
        <UserTopTags />
        <UserEarnings />
      </div>
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
