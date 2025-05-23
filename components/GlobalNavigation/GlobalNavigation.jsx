import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { LuSquarePlus } from "react-icons/lu";
import Image from "next/image";

export default function GlobalNavigation() {
  return (
    <nav>
      <Link href="/">
        <LuHouse />
      </Link>
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          width={100}
          height={100}
          alt="Logo"
        />
      </Link>
      <Link href="/create">
        <LuSquarePlus />
      </Link>
    </nav>
  );
}
