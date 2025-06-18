import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ showFilter }) =>
    showFilter ? "space-between" : "flex-end"};
  width: 380px;
  margin: 40px 0 20px 0;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 20px;
  }
`;
