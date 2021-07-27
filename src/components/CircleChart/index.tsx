import * as CC from "./styles";

interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokeWidth?: number;
}

export function CircleChart(props: CircleChartProps) {
  return <CC.Wrapper></CC.Wrapper>;
}
