import { FieldGroup, Label, ErrorMessage } from "./FormField.styles";

export default function FormField({ label, htmlFor, children, error }) {
  return (
    <>
      <FieldGroup>
        <Label htmlFor={htmlFor}>{label}</Label>
        {children}
      </FieldGroup>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
