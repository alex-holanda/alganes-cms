import styled from "styled-components";
import { Profile } from "../components/Profile";

export function EditorsList() {
  return (
    <EditorsListWrapper>
      <Profile name="Daniel Bonifácio" description="Editor há 8 anos" />
      <Profile name="Daniel Benedito" description="Editor há 2 anos" />
      <Profile name="Daniel João Frango" description="Editor há 5 anos" />
      <Profile name="Camila Vasconcellos" description="Editor há 12 anos" />
      <Profile name="Gabriel Freitas" description="Editor há 1 ano" />
      <Profile name="Rodrigo Mendes" description="Editor há 9 anos" />
      <Profile name="Aline Texeira" description="Editor há 12 anos" />
      <Profile name="Amanda Rodrigues" description="Editor há 1 ano" />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
