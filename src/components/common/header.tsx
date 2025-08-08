import Image from "next/image";
import Link from "next/link";

import { Cart } from "./cart";
import Menu from "./menu";

export const Header = () => {
  return (
    <header className="border-accent flex h-[80px] items-center justify-between border-b-2 p-5">
      <Link href="/">
        <Image src="/logo.png" alt="Camaler" width={80} height={30} />
      </Link>

      <div className="flex items-center gap-3">
        <Cart />
        <Menu />
      </div>
    </header>
  );
};
