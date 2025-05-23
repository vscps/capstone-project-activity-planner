import styled from "styled-components";
import Image from "next/image";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  border: 1.5px solid black;
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 480px) {
    margin: 10px;
    width: calc(100% - 20px);
    min-width: unset;
  }
`;

export const ImageArea = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  height: 80px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 22px;
`;

export const Heading = styled.h2`
  margin: 10px;
`;

export const CategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #000;
  color: #fff;
  height: 100%;
  width: 50%;
  padding: 10px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 0px 5px;
  padding: 3px 3px;
  background-color: #fff;
  color: #000;
  height: 20px;
  width: auto;
  border-radius: 3px;
  border: 1px solid grey;
  font-size: 12px;
  font-weight: 500;
`;
