import Icon from "@mdi/react";
import { mdiInformation } from "@mdi/js";

import { Wrapper, Content, InfoIcon, InfoMessage, InfoTitle } from "./styles";

interface InfoProps {
  title: string;
  description: string;
}

export function Info(props: InfoProps) {
  return (
    <Wrapper>
      <Content>
        <InfoIcon>
          <Icon path={mdiInformation} color="#09f" size="48px" />
        </InfoIcon>
        <InfoMessage>
          <InfoTitle>{props.title}</InfoTitle>
          <p>{props.description}</p>
        </InfoMessage>
      </Content>
    </Wrapper>
  );
}
