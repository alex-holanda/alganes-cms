import { NavLink } from "react-router-dom";

import styled from "styled-components";

import NotConnectedImg from "../../assets/not-connected.svg";

export function NotFoundView() {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Não encontramos esta página</p>
      <img src={NotConnectedImg} alt="" />
      <NavLink to="/" exact>
        Ir para a home
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
