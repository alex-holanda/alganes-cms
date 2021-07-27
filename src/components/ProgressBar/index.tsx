import { CurrentProgress, TextShadow, Wrapper } from "./styles";

interface ProgressBarProps {
  title: string;
  progress: number;
  theme: "primary" | "secondary";
  width?: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <Wrapper style={{ width: props.width || "auto" }}>
      <TextShadow>{props.title}</TextShadow>
      <CurrentProgress theme={props.theme} progress={props.progress}>
        <span>{props.title}</span>
      </CurrentProgress>
    </Wrapper>
  );
}
