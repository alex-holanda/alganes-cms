import { useState, useEffect } from "react";
import * as CC from "./styles";

interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokeWidth?: number;
}

export function CircleChart(props: CircleChartProps) {
  const getThemeColor = () => (props.theme === "primary" ? "#09f" : "#274060");

  const THEME = getThemeColor();
  const STROKE_WITH = props.strokeWidth || 8;
  const STROKE_COLOR = THEME;

  const CENTER = props.size / 2;
  const RADIOS = props.size / 2 - STROKE_WITH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIOS;

  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE;
    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, props.progress, offset]);

  return <CC.Wrapper>todo: CircleChart</CC.Wrapper>;
}
