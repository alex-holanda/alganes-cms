import { useEffect } from "react";

import Skeleton from "react-loading-skeleton";

import styled from "styled-components";

import { getEditorDescription } from "../../core/utils/getEditorDescription";

import useEditors from "../../core/hooks/useEditors";

import { Profile } from "../components/Profile";

export function EditorsList() {
  const { editorsList, fetchAllEditors, loading } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length) {
    return (
      <EditorsListWrapper>
        <Skeleton width={328} height={82} />
        <Skeleton width={328} height={82} />
        <Skeleton width={328} height={82} />
      </EditorsListWrapper>
    );
  }

  return (
    <EditorsListWrapper>
      {editorsList.map((editor) => {
        return (
          <Profile
            key={editor.id}
            editorId={editor.id}
            name={editor.name}
            description={getEditorDescription(new Date(editor.createdAt))}
            avatarUrl={editor.avatarUrls.small}
          />
        );
      })}
      {loading && "buscando mais informações"}
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
