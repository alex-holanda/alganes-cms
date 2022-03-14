import { useCallback, useState } from "react";

import { Post, PostService } from "alex-holanda-sdk";
import { info } from "../utils/info";

function useSinglePost() {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async (postId: number) => {
    setLoading(true);
    PostService.getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, []);

  const publishPost = useCallback(async (postId: number) => {
    await PostService.publishExistingPost(postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }, []);

  return {
    post,
    loading,
    fetchPost,
    publishPost,
  };
}

export default useSinglePost;
