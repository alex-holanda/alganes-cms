import formatDistance from "date-fns/formatDistance";
import ptBR from "date-fns/locale/pt-BR";

function getEditorDescription(editorCreationDate: Date) {
  const distance = formatDistance(editorCreationDate, new Date(), {
    locale: ptBR,
  });

  return `Editor há ${distance}`;
}

export { getEditorDescription };
