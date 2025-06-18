import {
  Wrapper,
  StyledLink,
  Card,
  ImageArea,
  StyledImage,
  TitleArea,
  Heading,
  CategoryArea,
  Category,
} from "./Activity.styles";

import Favorite from "../Favorite/Favorite";

export default function Activity({ data }) {
  return (
    <Wrapper>
      <Favorite id={data._id} />
      <Card>
        <StyledLink href={`/activity/${data._id}`}>
          <ImageArea>
            <StyledImage
              alt={data.title}
              src={data.imageUrl}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              fill
              sizes="(max-width: 480px) calc(100vw - 20px), min(100%, 400px)"
              quality={75}
            />
          </ImageArea>
        </StyledLink>
        <TitleArea>
          <StyledLink href={`/activity/${data._id}`}>
            <Heading>
              {data.title} | {data.country}
            </Heading>
          </StyledLink>
          <CategoryArea>
            {data.categories?.map((item, index) => (
              <Category data={item} key={item._id || index}>
                {item}
              </Category>
            ))}
          </CategoryArea>
        </TitleArea>
      </Card>
    </Wrapper>
  );
}
