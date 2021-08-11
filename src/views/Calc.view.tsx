import { useEffect } from "react";
import { useParams, useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CalcView() {
  const params = useParams<{ a: string; b: string }>();
  const query = useQuery();

  useEffect(() => {
    console.log(query.get("operation"));
  }, [query]);

  return <>Calc - {Number(params.a) + Number(params.b)}</>;
}
