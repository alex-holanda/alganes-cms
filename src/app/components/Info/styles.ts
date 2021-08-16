import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f8fa;
  width: 373px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`;

export const Content = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`;

export const InfoIcon = styled.div``;

export const InfoMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;
