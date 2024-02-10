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
import { useState } from "react";
import { Button } from "../ui/button";
import ThemeSwitcher from "./theme-switcher";
import { navlinks } from "@/helpers/contants";
import Link from "next/link";
import { UserButton, useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { FaWhatsapp } from "react-icons/fa6";

const tel = 12981847553;
var text =
  "*Seja muito bem-vindo ao WhatsApp da DeliMix! Estamos aqui para atendê-lo com todo o prazer.*\n";
text +=
  "Para realizar seu pedido, precisamos de algumas informações. Caso tenha alguma dúvida, fique à vontade para perguntar!\n\n";
text += "*Seu nome:*\n";
text += "*O que você gostaria de pedir hoje?*\n";
text += "*Endereço de entrega e ponto de referência:*\n";
text +=
  "*Qual será a forma de pagamento. (Dinheiro, PIX, Crédito, Débito, VA/VR)*\n\n";

text += "*Obrigado por escolher a Delimix!*";

let encode = encodeURIComponent(text);
let URL = `https://wa.me/${tel}?text=${encode}`;

const MobileMenu = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const { isSignedIn } = useUser();
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
        {isSignedIn && (
          <Button variant={"outline"} asChild className="rounded-xl">
            <Link
              href={URL}
              target="_blank"
              className="flex items-center gap-2"
            >
              Faça seu pedido <FaWhatsapp size={20} />
            </Link>
          </Button>
        )}

        {!isSignedIn && (
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              className="hidden rounded-xl md:flex"
              asChild
            >
              <Link
                href="/sign-in"
                className="flex w-full items-center justify-center gap-2"
              >
                Login <ImEnter size={20} />
              </Link>
            </Button>
            <Button variant={"outline"} asChild className="rounded-xl">
              <Link
                href={URL}
                target="_blank"
                className="flex items-center gap-2"
              >
                Faça seu pedido <FaWhatsapp size={20} />
              </Link>
            </Button>
          </div>
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
