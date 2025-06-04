import { forwardRef } from "react";
import { StyledTextarea } from "./TextareaField.styles";

const TextareaField = forwardRef((props, ref) => {
  return <StyledTextarea ref={ref} {...props} />;
});

TextareaField.displayName = "TextareaField";

export default TextareaField;
