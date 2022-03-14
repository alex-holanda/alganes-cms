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
  if (props.progress > 100) {
    throw new Error("Progresso só pode ser menor ou igual a 100");
  }

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

  return (
    <CC.Wrapper>
      <CC.SvgWrapper
        data-testid={"svg-wrapper"}
        style={{ width: props.size, height: props.size }}
      >
        <CC.Svg width={props.size} height={props.size}>
          <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIOS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIOS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WITH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage theme={props.theme}>
          {Math.ceil(props.progress)}%
        </CC.Percentage>
      </CC.SvgWrapper>
      {props.caption && <CC.Caption>{props.caption}</CC.Caption>}
    </CC.Wrapper>
  );
}
