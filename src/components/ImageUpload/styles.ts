import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div``;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: #09f;
  color: #fff;

  padding: 24px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonWrapper = styled.button`
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  color: #274060;
  border: none;

  cursor: pointer;

  span {
    font-size: 18px;
  }
`;

interface ImagePreviewProps {
  preview: string;
}

export const ImagePreview = styled.div<ImagePreviewProps>`
  height: 100%;
  background-image: url(${(props) => props.preview});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  ${ButtonWrapper} {
    display: none;
  }

  &:hover {
    ${ImagePreview} {
      opacity: 0.6;
    }

    ${ButtonWrapper} {
      display: flex;
    }
  }
`;
