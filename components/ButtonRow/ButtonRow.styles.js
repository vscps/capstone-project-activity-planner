import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ showFilter }) =>
    showFilter ? "space-between" : "flex-end"};
  width: 100vw;
  margin: 40px 0 20px 0;
  padding: 0 10px 0 10px;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    padding: 0 20px;
  }
`;
