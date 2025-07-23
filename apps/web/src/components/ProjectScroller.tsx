import { styled } from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #fff #fff;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 4px;
  }
`;
