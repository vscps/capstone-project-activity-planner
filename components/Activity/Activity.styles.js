import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Favorite from "../Favorite/Favorite";

export const Wrapper = styled.article`
  width: 380px;
  position: relative;
  margin: 15px 20px;
`;

export const FavoriteIcon = styled(Favorite)`
  top: 0px;
  right: 0px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid black;
  border-radius: 10px 10px 0 0;
  width: 380px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 480px) {
    margin: 10px;
    width: calc(100% - 20px);
    min-width: unset;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
  }
  &:visited {
    color: white;
  }
`;

export const ImageArea = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  display: block;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  min-height: 80px;
  overflow: hidden;
  white-space: normal;
  font-size: 22px;
`;

export const Heading = styled.h2`
  margin: 10px 10px 0 10px;
  font-size: 32px;
  flex-grow: 0;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  word-wrap: break-word;
`;

export const CategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #000;
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const Category = styled.button`
  display: flex;
  align-items: center;
  margin: 5px 5px 0px 0px;
  padding: 3px 8px;
  background-color: #127b88;
  color: #ffffff;
  border: 2px solid #127b88;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`;
