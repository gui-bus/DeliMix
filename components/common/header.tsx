"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <header>
      <Card className="rounded-b-none border-b border-neutral-900 dark:border-b-primary">
        <CardContent className="mx-auto flex w-full max-w-7xl items-center justify-around p-3">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="DeliMix"
              height={0}
              width={0}
              sizes="100vw"
              priority
              className="h-auto w-20 object-contain"
            />
          </Link>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <MobileMenu />
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
