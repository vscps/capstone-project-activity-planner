import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Listing = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  margin: 20px;
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
