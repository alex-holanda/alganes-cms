import withBoundary from "../../core/hoc/withBoundary";

import styled from "styled-components";
import { MarkdownEditor } from "../components/MarkdownEditor";

interface PostPreviewProps {
  postId: number;
}

function PostPreviw(props: PostPreviewProps) {
  return (
    <Wrapper>
      features/PostPreview
      <MarkdownEditor readOnly value="## Olá mundo \n- teste \n -teste" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  /* height: 640px; */
  background-color: #f3f8fa;
  border: 1px solid #ccc;
  padding: 24px;
`;

export default withBoundary(PostPreviw);
