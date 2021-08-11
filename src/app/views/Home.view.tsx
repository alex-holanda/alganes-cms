import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import { UserMetrics } from "../features/UserMetrics";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <UserMetrics />
      <PostsList />
    </DefaultLayout>
  );
}
