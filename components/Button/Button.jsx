import {
  CancelIcon,
  ConfirmIcon,
  DeleteIcon,
  EditIcon,
  FavoriteIcon,
  LoadingSpinner,
  RemoveFavoriteIcon,
  StyledButton,
  StyledButtonLink,
} from "./Button.styles";

export default function Button({
  text,
  onClick,
  purpose,
  isFavorite,
  isLoading,
  isLink,
  linkUrl,
  ...props
}) {
  let Icon = null;
  if (isLoading) {
    Icon = <LoadingSpinner />;
  } else {
    switch (purpose) {
      case "favorite":
        Icon = !isFavorite ? <FavoriteIcon /> : <RemoveFavoriteIcon />;
        break;
      case "delete":
        Icon = <DeleteIcon />;
        break;
      case "edit":
        Icon = <EditIcon />;
        break;
      case "submit":
        break;
      case "cancel":
        Icon = <CancelIcon />;
        break;
      case "confirm":
        Icon = <ConfirmIcon />;
        break;
      default:
        Icon = null;
    }
  }

  return (
    <>
      {isLink ? (
        <StyledButtonLink
          href={linkUrl}
          role="button"
          $purpose={purpose}
          $isLoading={isLoading}
          disabled={isLoading}
          {...props}
        >
          {Icon}
          {isLoading ? "Processing" : text}
        </StyledButtonLink>
      ) : (
        <StyledButton
          role="button"
          onClick={onClick}
          $purpose={purpose}
          $isLoading={isLoading}
          disabled={isLoading}
          {...props}
        >
          {Icon}
          {isLoading ? "Processing" : text}
        </StyledButton>
      )}
    </>
  );
}
