import { usePageTitle } from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";

export function ContactView() {
  usePageTitle("Contato");
  return (
    <DefaultLayout>
      <h1>Contato</h1>
    </DefaultLayout>
  );
}
