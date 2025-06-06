import styled from "styled-components";
import { LuStar } from "react-icons/lu";
import { LuStarOff } from "react-icons/lu";

export const FavoriteIcon = styled(LuStar)`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 5px;
  color: yellow;
  font-size: 50px;
  z-index: 10;
  cursor: pointer;
`;

export const RemoveFavoriteIcon = styled(LuStarOff)`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 5px;
  color: yellow;
  font-size: 50px;
  z-index: 10;
  cursor: pointer;
`;
