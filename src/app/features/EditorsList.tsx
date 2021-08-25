import { useEffect } from "react";
import styled from "styled-components";
import PostService from "../../sdk/services/Post.service";
import { Profile } from "../components/Profile";

export function EditorsList() {
  useEffect(() => {
    PostService.getAllPosts({
      editorId: 1,
      sort: ["id", "desc"],
      size: 2,
    });
  }, []);

  return (
    <EditorsListWrapper>
      <Profile
        editorId={1}
        name="Daniel Bonifácio"
        description="Editor há 8 anos"
      />
      <Profile
        editorId={2}
        name="Daniel Benedito"
        description="Editor há 2 anos"
      />
      <Profile
        editorId={3}
        name="Daniel João Frango"
        description="Editor há 5 anos"
      />
      <Profile
        editorId={4}
        name="Camila Vasconcellos"
        description="Editor há 12 anos"
      />
      <Profile
        editorId={5}
        name="Gabriel Freitas"
        description="Editor há 1 ano"
      />
      <Profile
        editorId={6}
        name="Rodrigo Mendes"
        description="Editor há 9 anos"
      />
      <Profile
        editorId={7}
        name="Aline Texeira"
        description="Editor há 12 anos"
      />
      <Profile
        editorId={8}
        name="Amanda Rodrigues"
        description="Editor há 1 ano"
      />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
