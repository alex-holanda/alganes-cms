import { Wrapper, Avatar, Info, Name, Description } from "./styles";

interface ProfileProps {
  name: string;
  description: string;
  editorId: number;
}

export function Profile(props: ProfileProps) {
  return (
    <Wrapper tabIndex={0} to={`/editores/${props.editorId}`}>
      <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
      <Info>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Info>
    </Wrapper>
  );
}
