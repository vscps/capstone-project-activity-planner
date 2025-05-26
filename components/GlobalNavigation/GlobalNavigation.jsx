import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { LuSquarePlus } from "react-icons/lu";
import { NavWrapper, NavIconLink, LogoLink } from "./GlobalNavigation.styled";
import Image from "next/image";

export default function GlobalNavigation() {
  return (
    <NavWrapper>
      <Link href="/" passHref legacyBehavior>
        <NavIconLink aria-label="Home">
          <LuHouse />
        </NavIconLink>
      </Link>

      <Link href="/" passHref legacyBehavior>
        <LogoLink aria-label="Home via Logo">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={100}
            height={40}
            priority
          />
        </LogoLink>
      </Link>

      <Link href="/create" passHref legacyBehavior>
        <NavIconLink aria-label="Create activity">
          <LuSquarePlus />
        </NavIconLink>
      </Link>
    </NavWrapper>
  );
}
