import DefaultLayout from "../layouts/Default";
import { usePageTitle } from "../../core/hooks";
import { EditorsList } from "../features/EditorsList";

export function EditorsListView() {
  usePageTitle("Lista de editores");
  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  );
}
