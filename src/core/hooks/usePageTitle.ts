import { useEffect } from "react";

function usePageTitle(title: string) {
  const BASE_TITLE = "AlgaNews";
  useEffect(() => {
    document.title = `${BASE_TITLE} - ${title}`;
  }, [title]);
}

export default usePageTitle;
