import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  padding: 0 20px;
  z-index: 999;
`;

export const FilterHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 0;
  align-self: flex-start;

  svg {
    font-size: 20px;
  }
`;

export const FilterBody = styled.div`
  position: absolute;
  top: 100%;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 80vh;
  overflow-y: auto;
  z-index: 20;
`;

export const FilterSection = styled.div`
  margin-bottom: 15px;

  h3 {
    margin: 0 0 10px 0;
    font-size: 16px;
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
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  span {
    margin-left: 3px;
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
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  padding: 5px;
  font-size: 14px;
  align-self: flex-start;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    color: #000;
  }
`;
