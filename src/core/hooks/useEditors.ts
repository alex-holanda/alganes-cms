import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Store, EditorActions } from "../store";

function useEditors() {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: Store.RootState) => state.editor.fetching
  );
  const editorsList = useSelector(
    (state: Store.RootState) => state.editor.editorsList
  );

  const fetchAllEditors = useCallback(
    async function () {
      dispatch(EditorActions.fetchAllEditors());
    },
    [dispatch]
  );

  return {
    loading,
    editorsList,
    fetchAllEditors,
  };
}

export default useEditors;
