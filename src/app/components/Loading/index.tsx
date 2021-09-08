import { Wrapper } from "./style";

export default function Loading() {
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
