import styled from "styled-components";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

export const FavoriteIcon = styled(MdBookmarkAdd)`
  margin: 5px;
  color: #dad8d8;
  font-size: 25px;
  z-index: 10;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #191919);
`;

export const RemoveFavoriteIcon = styled(MdBookmarkAdded)`
  margin: 5px;
  color: #ffc200;
  font-size: 25px;
  z-index: 10;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #191919);
`;

export const StyledButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #83b36c;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    background-color: #83b36c;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #83b36c;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
