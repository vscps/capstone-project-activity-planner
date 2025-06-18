import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
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
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  gap: 15px;
`;
