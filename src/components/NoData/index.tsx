import { Wrapper, Message, SadFace } from "./styles";

interface NoDataProps {
  height?: number;
}

export function NoData({ height = 120 }: NoDataProps) {
  return (
    <Wrapper height={height}>
      <Message>Sem dados para exibir</Message>
      <SadFace>:(</SadFace>
    </Wrapper>
  );
}
