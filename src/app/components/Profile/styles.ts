import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  gap: 24px;

  padding: 16px;
  border: 1px solid #ccc;

  cursor: pointer;

  transition: box-shadow 0.15s ease;

  text-decoration: none;
  color: #274060;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
  }
`;

export const Avatar = styled.img`
  height: 48px;
  size: 48px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 12px;
`;
