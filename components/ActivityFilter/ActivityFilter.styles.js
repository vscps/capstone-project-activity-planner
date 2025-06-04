import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  /* sticky for useEffect -> setSize(1); in ActivityList to simulating UX best practice */
  /* position: sticky;
  top: 20px;
  z-index: 10; */

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const FilterHeader = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 8px 10px;
  margin-bottom: 10px;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 25px;
    color: #127b88;
  }
`;

export const FilterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 450px;
  overflow-y: auto;
  animation: slideDown 0.3s ease-in-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 10px;
  color: #127b88;

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const FilterTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FilterTag = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.$active ? "#127b88" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#127b88")};
  border: 1px solid #127b88;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  span {
    font-weight: bold;
  }
`;

export const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0;
`;

export const ResetLink = styled.button`
  background: none;
  border: none;
  color: #127b88;
  text-decoration: underline;
  cursor: pointer;
  /* padding: 5px; */
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    color: #005a99;
  }
`;
