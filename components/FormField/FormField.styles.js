import styled from "styled-components";

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
`;

export const Label = styled.label`
  width: 100px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FieldContent = styled.div`
  flex: 1;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-left: 100px;
  margin-top: 0.25rem;
`;
