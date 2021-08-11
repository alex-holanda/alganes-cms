import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid ${transparentize(0.9, "#274060")};
  padding: 20px;
`;

export const Title = styled.div`
  margin-bottom: 16px;
`;
