import { useEffect } from "react";

export function usePageTitle(title: string) {
  const BASE_TITLE = "AlgaNews";
  useEffect(() => {
    document.title = `${BASE_TITLE} - ${title}`;
  }, [title]);
}
