import { Row } from "./ButtonRow.styles";

export default function ButtonRow({ children, showFilter, ...props }) {
  return <Row showFilter={showFilter}>{children}</Row>;
}
