import DefaultLayout from "../layouts/Default/Default.layout";

import { usePageTitle } from "../../core/hooks";
import { PostForm } from "../features/PostForm";
import { useParams } from "react-router";

export function PostEditView() {
  usePageTitle("Editando post");

  const params = useParams<{ id: string }>();
  return (
    <DefaultLayout>
      <PostForm postId={Number(params.id)} />
    </DefaultLayout>
  );
}
