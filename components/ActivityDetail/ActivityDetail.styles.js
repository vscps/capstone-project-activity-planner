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
  height: 400px;
  width: 100vw;
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
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  min-height: 80px;
  overflow: hidden;
  white-space: normal;
  font-size: 32px;
`;

export const Heading = styled.h1`
  margin: 10px;
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
  color: grey;
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
  line-height: 1.5;
  color: grey;
`;
export const StyledOptionsTitle = styled.h3`
  margin: 10px 0px;
  font-size: 2em;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 15px;
  max-width: 550px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    max-width: none;
  }
`;
