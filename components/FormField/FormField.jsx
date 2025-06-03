import {
  FieldGroup,
  Label,
  FieldContent,
  ErrorMessage,
} from "./FormField.styles";

export default function FormField({ label, htmlFor, children, error }) {
  return (
    <>
      <FieldGroup>
        <Label htmlFor={htmlFor}>{label}</Label>
        <FieldContent>{children}</FieldContent>
      </FieldGroup>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
