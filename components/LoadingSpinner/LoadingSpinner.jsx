import {
  LoadingSpinnerContainer,
  LoadingSpinnerStyle,
} from "./LoadingSpinner.styles";

function LoadingSpinner({ variant = "inline", ...props }) {
  return (
    <LoadingSpinnerContainer variant={variant} {...props}>
      <LoadingSpinnerStyle />
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
