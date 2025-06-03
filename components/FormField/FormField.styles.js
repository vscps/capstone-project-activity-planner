import styled from "styled-components";

export const FieldGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
`;

export const Label = styled.label`
  width: 100px;
  margin-top: 0.5rem;
  text-align: left;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-left: 100px;
  margin-top: 0.25rem;
`;
