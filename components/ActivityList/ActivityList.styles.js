import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  margin: 20px;
`;

export const LoadMoreButton = styled.button`
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
`;

export const EndMessage = styled.p`
  text-align: center;
  margin: 20px;
  color: grey;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  margin: 20px;
  color: grey;
`;
