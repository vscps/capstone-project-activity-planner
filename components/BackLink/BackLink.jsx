import { Container, Arrow, LinkText } from "./Backlink.styles.js";
import { Fragment } from "react";
import { LuArrowLeft } from "react-icons/lu";

export default function BackLink() {
  return (
    <Fragment>
      <Container href="../">
        <Arrow>
          <LuArrowLeft />
        </Arrow>
        <LinkText>Back to all activities</LinkText>
      </Container>
    </Fragment>
  );
}
