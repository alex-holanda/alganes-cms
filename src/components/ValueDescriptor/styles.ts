import styled from "styled-components";

const Colors = {
  default: "#0099FF",
  primary: "#274060",
};

interface WrapperProps {
  color: "primary" | "default";
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 12px;
    text-transform: lowercase;
  }

  div {
    span {
      font-size: 18px;
      font-weight: 800;
      color: ${(props) => Colors[props.color || "default"]};
    }
  }
`;
