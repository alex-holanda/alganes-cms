import DefaultLayout from "../layouts/Default";

import { EditorProfile } from "../features/EditorProfile";

export function EditorProfileView() {
  return (
    <DefaultLayout>
      <EditorProfile hidePersonalData />
    </DefaultLayout>
  );
}
