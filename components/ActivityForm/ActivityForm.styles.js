import styled from "styled-components";
import Image from "next/image";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  border-radius: 1 rem;
  gap: 1rem;
  margin: 0 auto;
`;

export const PlaceholderImage = styled(Image)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const SubmitButton = styled.button`
  background-color: lightgrey;
  color: black;
  padding: 0.75 rem 1.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darkgrey;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not allowed;
  }
`;
