import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: grey;

  &:visited {
    color: grey;
  }
`;

export const Arrow = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.p`
  margin: 0;
`;
