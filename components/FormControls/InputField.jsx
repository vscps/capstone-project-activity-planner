import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      style={{
        width: "80%",
        fontFamily: "inherit",
        fontSize: "1rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "0.5rem",
        ...props.style,
      }}
    />
  );
});

InputField.displayName = "InputField";
export default InputField;
