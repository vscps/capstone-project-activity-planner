import { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
export default function Activity({ data }) {
  return (
    <Fragment>
      <Card>
        <ImageArea>
          <Image
            alt={data.title}
            src={data.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageArea>

        <TitleArea>
          <h2 style={{ margin: "10px" }}>{data.title}</h2>
          <CategoryArea>
            {data.categories.map((item, index) => (
              <Category data={item} key={index}>
                {item}
              </Category>
            ))}
          </CategoryArea>
        </TitleArea>
      </Card>
    </Fragment>
  );
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  border: 1.5px solid black;
  border-radius: 10px 10px 0 0;
  min-width: 250px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ImageArea = styled.div`
  height: 200px;
  overflow: hidden;
`;

const TitleArea = styled.div`
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

const CategoryArea = styled.div`
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

const Category = styled.div`
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
  height: 20px;
`;
