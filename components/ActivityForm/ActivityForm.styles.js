import styled from "styled-components";
import Image from "next/image";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  max-width: 500px;
  width: 100%;
  border-radius: 1 rem;
  gap: 1rem;
`;

export const PlaceholderImage = styled(Image)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const SubmitButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const MessageRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
