import {
  ArrowIcon,
  CancelIcon,
  ConfirmIcon,
  DeleteIcon,
  EditIcon,
  FavoriteIcon,
  PreviewIcon,
  RemoveFavoriteIcon,
  StyledButton,
  StyledButtonLink,
} from "./Button.styles";

import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function Button({
  text,
  onClick,
  purpose,
  isFavorite,
  isLoading,
  as,
  href,
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
      case "back":
        Icon = <ArrowIcon />;
        break;
      case "preview":
        Icon = <PreviewIcon />;
        break;
      default:
        Icon = null;
    }
  }

  if (as === "a") {
    return (
      <StyledButtonLink
        href={href}
        role="button"
        $purpose={purpose}
        $isLoading={isLoading}
        {...props}
      >
        {Icon}
        {isLoading ? "Processing" : text}
      </StyledButtonLink>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      role="button"
      $purpose={purpose}
      $isLoading={isLoading}
      disabled={isLoading}
      {...props}
    >
      {Icon}
      {isLoading ? "Processing" : text}
    </StyledButton>
  );
}
