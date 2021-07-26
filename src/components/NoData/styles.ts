import styled from "styled-components";

interface WrapperProps {
  height: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #274060;
`;

export const SadFace = styled.span`
  font-family: "Roboto Mono", monospace;
  color: #09f;
  font-weight: 700;
`;
