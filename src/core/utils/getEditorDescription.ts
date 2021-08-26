import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

function getEditorDescription(editorCreationDate: Date) {
  const distance = formatDistance(editorCreationDate, new Date(), {
    locale: ptBR,
  });

  return `Editor há ${distance}`;
}

export { getEditorDescription };
