import styled from "styled-components";
import Image from "next/image";

export const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
  border-top: 1px solid #444;
  height: 60px;
  z-index: 100;
`;

export const NavIconLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  font-size: 2rem;
  text-decoration: none;
  height: 100%;

  &:hover,
  &:visited:hover {
    background-color: rgb(240, 240, 240);
    color: #808080;

    @media (max-width: 768px) {
      background-color: transparent;
    }
  }

  &:visited {
    color: #808080;
  }

  &:active {
    background-color: #f5f5f5;

    @media (max-width: 768px) {
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
  &:active,
  &:visited {
    background-color: transparent;
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;
