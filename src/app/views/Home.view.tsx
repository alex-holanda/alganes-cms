import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import { UserPerformance } from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <UserTopTags />
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
