import styled from "styled-components";
import { ValueDescriptor } from "../components/ValueDescriptor";

export function UserEarnings() {
  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        color="primary"
        description="ganhos no mês"
        value={563222.32}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="ganhos na semana"
        value={563222.32}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="ganhos de sempre"
        value={563222.32}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="total de palavras"
        value={2_345_346}
      />
    </UserEarningsWrapper>
  );
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
