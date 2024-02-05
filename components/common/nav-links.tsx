"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { navlinks } from "@/helpers/contants";

interface NavLinkButtonProps {
  href: string;
  text: string;
}

const NavLinkButton = ({ href, text }: NavLinkButtonProps) => {
  return (
    <Button variant={"ghost"} className="rounded-full" asChild>
      <Link
        href={href}
        className="flex w-full items-center justify-center gap-2"
      >
        {text}
      </Link>
    </Button>
  );
};

const NavLinks = () => {
  return (
    <div>
      <nav className="flex flex-col items-center justify-center gap-4 md:flex-row">
        {navlinks.map((navlink) => (
          <NavLinkButton
            key={navlink.text}
            href={navlink.href}
            text={navlink.text}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
