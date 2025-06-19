import styled from "styled-components";

export const CheckboxGroupWrapper = styled.div`
  width: 80%;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #ccc;
  border-radius: 1px;
  background-color: white;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: #127b88;
    border-color: #127b88;
    position: relative;
  }

  &:checked::after {
    content: "✓";
    color: white;
    font-size: 10px;
    position: absolute;
    top: -1px;
    left: 1px;
    font-weight: bold;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 0.5 rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: red;
`;
