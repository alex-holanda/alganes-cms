import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 24px;
  width: 329px;
  gap: 12px;

  background-color: #f3f8fa;
  color: #274060;
`;

export const ConfirmTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;

export const ButtonConten = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;
