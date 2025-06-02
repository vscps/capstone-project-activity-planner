import styled from "styled-components";
import Image from "next/image";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

export const FormBox = styled.form`
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
    curser: not allowed;
  }
`;
