import { Container, Arrow, LinkText } from "./Backlink.styles.js";
import { Fragment } from "react";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link.js";

export default function BackLink() {
  return (
    <Fragment>
      <Link href="../">
        <Arrow>
          <LuArrowLeft />
        </Arrow>
        <LinkText>Back to all activities</LinkText>
      </Link>
    </Fragment>
  );
}
