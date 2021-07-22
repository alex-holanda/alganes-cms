import { ButtonHTMLAttributes } from "react";
import { Wrapper } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "danger" | "text";
  label: string;
}

export function Button({ variant, label, ...props }: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {label}
    </Wrapper>
  );
}
