import styled from "styled-components";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

export const FavoriteIcon = styled(MdBookmarkAdd)`
  position: absolute;
  top: -30px;
  right: 0px;
  margin: 5px;
  color: #f5f5f5;
  font-size: 50px;
  z-index: 10;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #777);
`;

export const RemoveFavoriteIcon = styled(MdBookmarkAdded)`
  position: absolute;
  top: -30px;
  right: 0px;
  margin: 5px;
  color: #127b88;
  font-size: 50px;
  z-index: 10;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #777);
`;
