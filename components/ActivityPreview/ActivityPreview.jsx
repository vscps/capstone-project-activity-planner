import {
  Container,
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
} from "./ActivityPreview.styles.js";

export default function ActivityPreview({
  data,
  categoriesData,
  selectedCategoryIds,
  isEditingState,
}) {
  return (
    <Container>
      <MainContent>
        <ImageArea>
          <StyledImage
            alt={data.title}
            src={
              isEditingState && data?.imageUrl
                ? data.imageUrl
                : "/assets/images/placeholder.png"
            }
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
            {selectedCategoryIds?.map((id) => {
              const category = categoriesData?.find((cat) => cat.id === id);
              return (
                <Category key={id}>
                  {category?.name || "Unknown category"}
                </Category>
              );
            })}
          </CategoryArea>
        </TitleArea>
        <StyledActivityCountry>Country: {data.country}</StyledActivityCountry>
        <StyledActivityTitle>Area: {data.area}</StyledActivityTitle>
        <StyledActivityDescription>
          {data.description}
        </StyledActivityDescription>
      </MainContent>
    </Container>
  );
}
