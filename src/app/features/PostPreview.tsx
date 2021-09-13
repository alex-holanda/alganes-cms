import { useEffect, useState } from "react";

import withBoundary from "../../core/hoc/withBoundary";

import { Post } from "../../sdk/@types";
import PostService from "../../sdk/services/Post.service";

import { Button } from "../components/Button";
import { MarkdownEditor } from "../components/MarkdownEditor";
import Loading from "../components/Loading";

import styled from "styled-components";

interface PostPreviewProps {
  postId: number;
}

function PostPreviw(props: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    PostService.getExistingPost(props.postId)
      .then(setPost)
      .catch((error) => {
        setError(new Error(error.message));
      })
      .finally(() => setLoading(false));
  }, [props.postId]);

  if (loading) {
    return <Loading show={loading} />;
  }

  if (error) {
    throw error;
  }

  if (!post) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        <Title>{post.title}</Title>

        <Actions>
          <Button variant="danger" label="Publicar" disabled={post.published} />
          <Button variant="primary" label="Editar" disabled={post.published} />
        </Actions>
      </Header>

      <ImagePreview src={post.imageUrls.default} />

      <MarkdownEditor readOnly value={post.body} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  max-height: 70vh;
  background-color: #f3f8fa;
  border: 1px solid #ccc;
  padding: 24px;

  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
`;

const Header = styled.header`
  display: flex;
`;

const Title = styled.h2``;

const Actions = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ImagePreview = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`;

export default withBoundary(PostPreviw);
