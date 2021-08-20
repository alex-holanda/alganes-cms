import DefaultLayout from "../layouts/Default";

import { EditorProfile } from "../features/EditorProfile";
import ErrorBoundary from "../components/ErrorBoundary";

export function EditorProfileView() {
  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile hidePersonalData />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
