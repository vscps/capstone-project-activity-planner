import { Row } from "./ButtonRow.styles";

export default function ButtonRow({ children, showFilter }) {
  return <Row showFilter={showFilter}>{children}</Row>;
}
