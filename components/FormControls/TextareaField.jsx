import { forwardRef } from "react";

const TextareaField = forwardRef((props, ref) => {
  return (
    <textarea
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
        resize: "vertical",
        ...props.style,
      }}
    />
  );
});

TextareaField.displayName = "TextareaField";

export default TextareaField;
