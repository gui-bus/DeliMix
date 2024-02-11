"use client";

import { RiPagesLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-grow flex-col items-center justify-center bg-[url('/loading.png')] bg-cover bg-center bg-no-repeat px-5 text-white">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <span className="text-7xl font-black text-white opacity-70 dark:text-white/50">
          404
        </span>

        <h1 className="text-xl font-light">
          Oops! Parece que você encontrou uma página que não existe
        </h1>

        <p className="text-sm font-light">
          Pedimos desculpas pelo transtorno. Para retornar à página inicial, por
          favor, clique no botão abaixo.
        </p>

        <Button
          variant={"default"}
          className="mx-auto w-full max-w-md text-white"
          asChild
        >
          <Link href="/">
            Voltar para a página inicial{" "}
            <RiPagesLine size={20} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
