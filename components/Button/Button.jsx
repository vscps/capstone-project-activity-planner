import {
  FavoriteIcon,
  RemoveFavoriteIcon,
  StyledButton,
} from "./Button.styles";

export default function Button({ text, onClick, isFavorite }) {
  return (
    <StyledButton role="button" onClick={onClick}>
      {!isFavorite ? <FavoriteIcon /> : <RemoveFavoriteIcon />}

      {text}
    </StyledButton>
  );
}
