import { Button } from "../Button";

import { Wrapper, ConfirmTitle, ButtonConten } from "./styles";

interface ConfirmProps {
  title: string;
  onCancel: () => any;
  onConfirm: () => any;
}

export function Confirm({ title, onCancel, onConfirm }: ConfirmProps) {
  return (
    <Wrapper>
      <ConfirmTitle>{title}</ConfirmTitle>
      <ButtonConten>
        <Button variant="danger" label="Não" onClick={onCancel} />
        <Button variant="primary" label="Sim" onClick={onConfirm} />
      </ButtonConten>
    </Wrapper>
  );
}
