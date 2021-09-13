import styled from "styled-components";
import { transparentize } from "polished";

const COLORS = {
  primary: "#0099ff",
  red: "#f84735",
  foreground: "#274060",
};

const THEME = {
  primary: {
    backGround: "#0099ff",
    color: "#fff",
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    `,
    disabled: {
      color: "#fff",
      backGround: transparentize(0.44, COLORS.primary),
    },
  },
  danger: {
    backGround: "#f84734",
    color: "#fff",
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    `,
    disabled: {
      color: COLORS.red,
      backGround: transparentize(0.75, COLORS.red),
    },
  },
  text: {
    backGround: "transparent",
    color: "#274060",
    onHover: `
      border-color: #274060;
    `,
    disabled: {
      color: COLORS.foreground,
      backGround: transparentize(0.44, "#508ac9"),
    },
  },
};

interface WrapperProps {
  variant: "primary" | "danger" | "text";
}

export const Wrapper = styled.button<WrapperProps>`
  padding: 6px 8px 4px;
  border: 1px solid ${(props) => THEME[props.variant].backGround};

  color: ${(props) => THEME[props.variant].color};
  background-color: ${(props) => THEME[props.variant].backGround};

  &:hover,
  &:focus {
    ${(props) => THEME[props.variant].onHover}
  }

  &:disabled {
    background-color: ${(props) => THEME[props.variant].disabled.backGround};
    color: ${(props) => THEME[props.variant].disabled.color};
    border-color: transparent;

    pointer-events: none;

    opacity: 0.5;
  }
`;
