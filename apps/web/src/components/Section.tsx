import { styled } from "styled-components";

export default styled.div<{ $backgroundColor?: string; $padding?: string }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ $padding = "2rem 1rem" }) => $padding};
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${({ $backgroundColor = "inherit" }) => $backgroundColor};
`;
