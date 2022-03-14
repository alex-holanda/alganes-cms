import { useEffect, useState } from "react";

import { Button } from "../components/Button";
import { MarkdownEditor } from "../components/MarkdownEditor";
import Loading from "../components/Loading";

import styled from "styled-components";

import withBoundary from "../../core/hoc/withBoundary";

import { confirm } from "../../core/utils/confirm";
import { modal } from "../../core/utils/modal";
import { useSinglePost } from "../../core/hooks";

interface PostPreviewProps {
  postId: number;
}

function PostPreviw(props: PostPreviewProps) {
  const { post, loading, fetchPost, publishPost } = useSinglePost();
  const [error, setError] = useState<Error>();

  function reopenModal() {
    modal({
      children: <PostPreviw postId={props.postId} />,
    });
  }

  useEffect(() => {
    fetchPost(props.postId).catch((error) => {
      setError(new Error(error.message));
    });
  }, [fetchPost, props.postId]);

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
          <Button
            variant="danger"
            label="Publicar"
            disabled={post.published}
            onClick={() =>
              confirm({
                title: "Publicar o post?",
                onConfirm: () => publishPost(post.id),
                onCancel: reopenModal,
              })
            }
          />
          <Button
            variant="primary"
            label="Editar"
            disabled={post.published}
            onClick={() =>
              (window.location.pathname = `/posts/editar/${post.id}`)
            }
          />
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
