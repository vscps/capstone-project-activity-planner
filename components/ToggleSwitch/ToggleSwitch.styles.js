import Link from "next/link";
import styled from "styled-components";
import { MdBookmark } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

export const BookmarkIcon = styled(MdBookmark)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  font-size: 30px;
  color: #ffffff;
  z-index: 1;
  pointer-events: none;
  transition: left 0.3s ease, right 0.3s ease, color 0.3s ease;
  filter: drop-shadow(1px 1px 2px #bbb);

  &.icon {
  }
`;

export const BookmarkIconAdded = styled(MdBookmarkAdded)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  font-size: 30px;
  color: #ffffff;
  z-index: 1;
  pointer-events: none;
  transition: left 0.3s ease, right 0.3s ease, color 0.3s ease;
  filter: drop-shadow(1px 1px 2px #bbb);

  &.icon {
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 80px;
  height: 45px;
  border: 2px solid black;
  background-color: #dad8d8;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  margin: 0;
  visibility: hidden;

  &:checked + label {
    background-color: #127b88;
  }

  &:checked + label .knob {
    transform: translateX(34px);
    background-color: #ffffff;
  }

  &:checked + label .icon {
    right: auto;
    left: 5px;
    color: #ffffff;
  }
`;

export const Knob = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 34px;
  height: 34px;
  background-color: #127b88;
  border-radius: 2px;
  transition: transform 0.3s ease;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(1px 1px 2px #bbb);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
`;
