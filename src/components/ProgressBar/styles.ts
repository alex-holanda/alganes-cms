import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  height: 24px;
  color: #fff;
  background-color: ${transparentize(0.85, "#244000")};
  position: relative;
`;

interface CurrentProgressProps {
  progress: number;
  theme: "primary" | "secondary";
}

export const CurrentProgress = styled.div<CurrentProgressProps>`
  height: 100%;
  background-color: ${(props) =>
    props.theme === "primary" ? "#09f" : "#274060"};
  width: ${(props) => props.progress}%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${(props) => (props.progress > 0 ? "padding-left: 4px;" : "")}
  transition: 0.25s ease;
  z-index: 2;
  position: relative;
`;

export const TextShadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: #274060;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  padding-left: 4px;
  white-space: normal;
`;
