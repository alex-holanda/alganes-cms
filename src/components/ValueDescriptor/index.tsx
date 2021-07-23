import { Wrapper } from "./styles";

interface ValueDescriptorProps {
  description: string;
  value: number;
  color: "primary" | "default";
  isCurrency?: boolean;
}

export function ValueDescriptor(props: ValueDescriptorProps) {
  return (
    <Wrapper color={props.color}>
      <span>{props.description}:</span>
      <div>
        {props.isCurrency && <span>{"R$"}</span>}
        <span>{props.value.toLocaleString("pt-br")}</span>
      </div>
    </Wrapper>
  );
}
