import { forwardRef } from "react";
import { StyledInput } from "./InputField.styles";

const InputField = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

InputField.displayName = "InputField";
export default InputField;
