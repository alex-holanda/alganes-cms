import DefaultLayout from "../layouts/Default";
import { usePageTitle } from "../../core/hooks/usePageTitle";

export function EditorsListView() {
  usePageTitle("Lista de editores");
  return <DefaultLayout>todo: editores</DefaultLayout>;
}
