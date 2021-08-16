import { useHistory } from "react-router-dom";

import styled from "styled-components";

import NotFound from "../../assets/not_found.svg";
import { Button } from "../components/Button";

export function NotFoundView() {
  const history = useHistory();

  return (
    <Wrapper>
      <span>Oops!</span>
      <h1>Não encontramos esta página</h1>
      <img src={NotFound} alt="Não encontrado" />
      <Button
        variant="primary"
        label="Ir para a home"
        onClick={() => history.replace("/")}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  span {
    font-size: 72px;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`;
