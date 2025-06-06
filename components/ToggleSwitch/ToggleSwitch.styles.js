import Link from "next/link";
import styled from "styled-components";

export const Input = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background-color: #127b88;
  }

  &:checked + label::after {
    left: calc(100% - 25px);
    transform: translateX(0);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  width: 60px;
  height: 30px;
  background-color: #dad8d8;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #83b36c;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 70px;
    transition: 0.5s;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
`;
