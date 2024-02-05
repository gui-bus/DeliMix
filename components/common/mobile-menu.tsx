"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { ImEnter, ImExit } from "react-icons/im";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import { Button } from "../ui/button";
import ThemeSwitcher from "./theme-switcher";
import NavLinks from "./nav-links";
import { navlinks } from "@/helpers/contants";
import Link from "next/link";

const MobileMenu = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const sheetButtonClick = () => {
    setSheetIsOpen(false);
  };

  const handleLoginClick = () => {
    console.log("TODO: ADD LOGIN");
  };

  const handleLogoutClick = () => {
    console.log("TODO: ADD LOGOUT");
  };

  return (
    <div className="flex items-center gap-3">
      <ThemeSwitcher />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <HiMiniShoppingCart size={25} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
            <SheetDescription className="flex flex-col items-center justify-center">
              <Separator className="my-2" />
              <p>TODO: ADD CART</p>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="md:hidden">
        <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon size={25} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col items-center justify-center">
                <Separator className="my-2" />

                <Button
                  onClick={handleLoginClick}
                  variant={"default"}
                  className="mt-4 flex w-full items-center justify-center gap-2 dark:text-white"
                >
                  Login <ImEnter size={20} />
                </Button>

                <Separator className="my-5" />

                <div className="flex w-full flex-col gap-2">
                  {navlinks.map((navlink) => (
                    <Button
                      key={navlink.text}
                      variant={"ghost"}
                      className="rounded-full"
                      asChild
                      onClick={sheetButtonClick}
                    >
                      <Link
                        href={navlink.href}
                        className="flex w-full items-center justify-center gap-2"
                      >
                        {navlink.text}
                      </Link>
                    </Button>
                  ))}

                  <Button
                    onClick={handleLogoutClick}
                    variant={"outline"}
                    className="flex items-center justify-center gap-2 dark:text-white"
                  >
                    Logout <ImExit size={20} />
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileMenu;
