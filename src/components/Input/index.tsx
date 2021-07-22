import { InputHTMLAttributes } from "react";
import { Wrapper } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <input type="text" {...props} />
    </Wrapper>
  );
}
