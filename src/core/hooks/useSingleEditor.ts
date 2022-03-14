import { User, UserService } from "alex-holanda-sdk";
import { useCallback, useState } from "react";

function useSingleEditor() {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback(async function (editorId: number) {
    UserService.getExistingEditor(editorId).then(setEditor);
  }, []);

  return {
    editor,
    fetchEditor,
  };
}

export default useSingleEditor;
