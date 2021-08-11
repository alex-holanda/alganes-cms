import { NavLink } from "react-router-dom";

import styled from "styled-components";

export function Navbar() {
  return (
    <List>
      <Item>
        <NavLink to="/" exact>
          Início
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/contato" exact>
          artigos
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/c" exact>
          portifólio
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/co" exact>
          storage
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/cont" exact>
          usuários
        </NavLink>
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

    &.active {
      color: #09f;
      font-weight: 700;
    }
  }
`;
