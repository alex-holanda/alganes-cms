import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  gap: 16px;
  flex-direction: column;

  span {
    color: #274060;
    font-size: 14px;
    font-weight: 500;
  }

  input {
    height: 28px;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 6px;

    border: none;
    outline: none;
    border-radius: 0;

    color: #274060;

    border-bottom: 1px solid #274060;

    &::placeholder {
      color: ${transparentize(0.5, "#274060")};
    }
  }
`;
