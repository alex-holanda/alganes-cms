import styled from "styled-components";

interface ParagraphProps {
  size?: "default" | "small";
  children: React.ReactNode;
}

export function Paragraph({ size, children }: ParagraphProps) {
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
}

interface StyledParagraphProps {
  size?: "default" | "small";
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-size: ${(props) => (props.size === "small" ? 12 : 24)}px;
  line-height: ${(props) => (props.size === "small" ? 20 : 25)}px;
  color: #276040;
`;
