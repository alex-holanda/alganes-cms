import DefaultLayout from "../layouts/Default";
import { usePageTitle } from "../../core/hooks/usePageTitle";
import { EditorsList } from "../features/EditorsList";

export function EditorsListView() {
  usePageTitle("Lista de editores");
  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  );
}
