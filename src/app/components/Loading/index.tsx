import { Wrapper } from "./style";

interface LoadingProps {
  show?: boolean;
}

export default function Loading(props: LoadingProps) {
  if (!props.show) {
    return null;
  }

  return (
    <Wrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}
