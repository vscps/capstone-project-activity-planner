import styled from "styled-components";

export const ConfirmationWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 450px;
  overflow-y: auto;
  animation: ${({ $isDisappearing }) =>
    $isDisappearing
      ? "slideUp 0.3s ease-in-out forwards"
      : "slideDown 0.3s ease-in-out"};

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

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 75px;
  font-weight: bold;
  color: green;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
