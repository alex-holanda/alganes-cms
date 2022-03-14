import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "alex-holanda-sdk";

import { PostActions } from "../store";

import selectPaginatedPosts from "../selectors/selectPaginatedPosts";
import selectPostsFetching from "../selectors/selectPostsFetching";

function usePosts() {
  const dispatch = useDispatch();

  const paginatedPosts = useSelector(selectPaginatedPosts);
  const loading = useSelector(selectPostsFetching);

  const fetchPosts = useCallback(
    async function (query: Post.Query) {
      dispatch(PostActions.fetchPosts(query));
    },
    [dispatch]
  );

  return {
    paginatedPosts,
    loading,
    fetchPosts,
  };
}

export default usePosts;
