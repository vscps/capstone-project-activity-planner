import {
  Container,
  Card,
  ImageArea,
  StyledImage,
  TitleArea,
  Heading,
  CategoryArea,
  Category,
  MainContent,
  StyledActivityTitle,
  StyledActivityCountry,
  StyledActivityDescription,
} from "./ActivityDetail.styles.js";
import BackLink from "../BackLink/BackLink.jsx";
import Button from "../Button/Button.jsx";
import useFavorites from "@/hooks/useFavorites.js";
export default function ActivityDetail({ data }) {
  const [favorites, isFavorite, toggleFavorite] = useFavorites();
  const buttonText = isFavorite(data._id)
    ? "Remove from favorites"
    : "Add to favorites";
  return (
    <Container>
      <Card>
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

        <TitleArea>
          <Heading>{data.title}</Heading>
          <CategoryArea>
            {data.categories.map((item, index) => (
              <Category data={item} key={index}>
                {item}
              </Category>
            ))}
          </CategoryArea>
        </TitleArea>
      </Card>
      <MainContent>
        <StyledActivityCountry>Country: {data.country}</StyledActivityCountry>
        <StyledActivityTitle>Area: {data.area}</StyledActivityTitle>
        <StyledActivityDescription>
          {data.description}
        </StyledActivityDescription>
        <BackLink></BackLink>
      </MainContent>

      <Button
        text={buttonText}
        onClick={() => toggleFavorite(data._id)}
        isFavorite={isFavorite(data._id)}
      />
    </Container>
  );
}
