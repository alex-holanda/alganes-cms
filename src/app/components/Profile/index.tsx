import { Wrapper, Avatar, Info, Name, Description } from "./styles";

interface ProfileProps {
  name: string;
  description: string;
  editorId: number;
  avatarUrl?: string;
}

export function Profile(props: ProfileProps) {
  return (
    <Wrapper tabIndex={0} to={`/editores/${props.editorId}`}>
      <Avatar src={props.avatarUrl} />
      <Info>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Info>
    </Wrapper>
  );
}
