import { Link } from "react-router-dom";

import styled from "styled-components";

export function Navbar() {
  return (
    <List>
      <Item>
        <Link to="/">Início</Link>
      </Item>
      <Item>
        <Link to="/contato">artigos</Link>
      </Item>
      <Item>
        <Link to="/contato">portifólio</Link>
      </Item>
      <Item>
        <Link to="/contato">storage</Link>
      </Item>
      <Item>
        <Link to="/contato">usuários</Link>
      </Item>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #274060;
  }
`;
