import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ImageArea = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: 200px;
  }
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
  font-size: 32px;
`;

export const Heading = styled.h1`
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

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 20px 50px 20px;
  padding: 15px 15px;
  border-radius: 10px 10px 0 0;
  background-color: rgba(225, 225, 225, 0.1);
  backdrop-filter: blur(3px);
  color: #000;
  width: 100%;
  font-weight: 500;
  max-width: 75%;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

export const StyledActivityCountry = styled.h2`
  margin: 10px 0px;
  font-size: 26px;
`;

export const StyledActivityTitle = styled.h3`
  margin: 10px 0px;
`;

export const StyledActivityDescription = styled.p`
  margin: 10px 0px;
  padding: 20px 0px;
  border-top: 1px solid #ccc;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
