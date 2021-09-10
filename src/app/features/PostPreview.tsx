import withBoundary from "../../core/hoc/withBoundary";

import styled from "styled-components";

import { Button } from "../components/Button";
import { MarkdownEditor } from "../components/MarkdownEditor";

interface PostPreviewProps {
  postId: number;
}

function PostPreviw(props: PostPreviewProps) {
  return (
    <Wrapper>
      <Header>
        <Title>{"Como fiquei rico Aprendendo React"}</Title>

        <Actions>
          <Button variant="danger" label="Publicar" />
          <Button variant="primary" label="Editar" />
        </Actions>
      </Header>

      <ImageWrapper>
        <ImagePreview
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv_XRZ0UjiUG8YjFt3agB3qdMzB5YNNZbG07oDYhN2hBdAnHIRv6Ppyih4KS4OhHW0Qc&usqp=CAU"
          }
        />
      </ImageWrapper>

      <MarkdownEditor readOnly value="## Olá mundo \n- teste \n -teste" />
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
  gap: 8px;
`;

const ImageWrapper = styled.div`
  height: 240px;
`;

interface ImagePreviewProps {
  url: string;
}

const ImagePreview = styled.div<ImagePreviewProps>`
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default withBoundary(PostPreviw);
