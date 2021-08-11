import { useEffect } from "react";
import { useParams } from "react-router";

export function UserView() {
  const params = useParams<{ userId: string }>();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <>Usuário - {params.userId}</>;
}
