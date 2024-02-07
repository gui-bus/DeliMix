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
import { ImEnter } from "react-icons/im";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import { Button } from "../ui/button";
import ThemeSwitcher from "./theme-switcher";
import { navlinks } from "@/helpers/contants";
import Link from "next/link";
import { UserButton, useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const MobileMenu = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const sheetButtonClick = () => {
    setSheetIsOpen(false);
  };

  const handleLogoutClick = () => {
    signOut();
    setSheetIsOpen(false);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <UserButton />
          <div className="hidden md:block">
            <ThemeSwitcher size={"icon"} variant={"link"} />
          </div>
        </div>

        
          {!isSignedIn && (
            <Button
              variant={"default"}
              size={"lg"}
              className="hidden rounded-3xl md:flex"
              asChild
            >
              <Link
                href="/sign-in"
                className="flex w-full items-center justify-center gap-2"
              >
                Login <ImEnter size={20} />
              </Link>
            </Button>
          )}
        
      </div>

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

                {!isSignedIn ? (
                  <>
                    <div className="flex w-full items-center gap-2">
                      <Button
                        variant={"default"}
                        size={"lg"}
                        className="rounded-3xl"
                        asChild
                      >
                        <Link
                          href="/sign-in"
                          className="flex w-full items-center justify-center gap-2"
                        >
                          Login <ImEnter size={20} />
                        </Link>
                      </Button>

                      <ThemeSwitcher size={"icon"} variant={"link"} />
                    </div>

                    <Separator className="my-5" />
                  </>
                ) : (
                  <>
                    <div className="flex w-full items-center gap-2">
                      <Button
                        variant={"default"}
                        size={"lg"}
                        className="flex w-full items-center justify-center gap-2 rounded-3xl"
                        onClick={handleLogoutClick}
                      >
                        Logout <ImEnter size={20} />
                      </Button>

                      <ThemeSwitcher size={"icon"} variant={"link"} />
                    </div>

                    <Separator className="my-5" />
                  </>
                )}

                <div className="flex w-full flex-col gap-2">
                  {navlinks.map((navlink) => (
                    <Button
                      key={navlink.text}
                      variant={"outline"}
                      className="rounded-full"
                      asChild
                      onClick={sheetButtonClick}
                    >
                      <Link
                        href={navlink.href}
                        className="flex w-full items-center justify-center gap-2 dark:text-white/70"
                      >
                        {navlink.text}
                      </Link>
                    </Button>
                  ))}
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
