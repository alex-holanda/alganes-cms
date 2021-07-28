import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 20px;
  border: 1px solid #ccc;
  color: #274060;
`;

export const Avatar = styled.img`
  height: 48px;
  size: 48px;
  object-fit: cover;
`;

export const Name = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 12px;
  text-transform: lowercase;
`;
