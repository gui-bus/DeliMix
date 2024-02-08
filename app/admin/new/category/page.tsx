"use client";
import NewCategoryForm from "@/components/admin/new-category-form";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="relative">
          <Image
            src="/01.png"
            alt="DeliMix Banner - Cadastro de categorias"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
            draggable="false"
          />
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => router.back()}
            className="absolute left-4 top-4 w-fit"
          >
            <ChevronLeftIcon size={20} className="mr-2" /> Voltar
          </Button>
        </div>

        <div className="w-full p-5">
          <div className="mx-auto mb-5 flex w-full flex-col justify-center space-y-2">
            <h1 className="flex justify-center text-2xl font-bold">
              Adicionar Categoria
            </h1>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Cadastre novas categorias para personalizar seu cardápio.
            </p>
          </div>
          <NewCategoryForm />
        </div>
      </div>
    </section>
  );
};

export default Search;
