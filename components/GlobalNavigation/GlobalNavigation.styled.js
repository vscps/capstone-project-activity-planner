import styled from "styled-components";
import Image from "next/image";

export const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: grey;
  border-top: 1px solid #444;
  height: 60px;
  z-index: 100;
`;

export const NavIconLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  height: 100%;

  &:hover {
    background-color: darkgrey;

    @media (max-width: 768px) {
      background-color: transparent;
    }
  }

  &:active {
    background-color: black;

    @media (max-width: 768p) {
      background-color: transparent;
    }
  }
`;

export const LogoLink = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover,
  &:active {
    background-color: transparent;
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;
