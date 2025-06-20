import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
