import DefaultLayout from "../layouts/Default/Default.layout";

import { usePageTitle } from "../../core/hooks";
import { PostForm } from "../features/PostForm";

export function PostCreateView() {
  usePageTitle("Novo post");
  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  );
}
