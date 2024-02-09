import NewCategoryForm from "@/components/admin/new-category-form";
import BackButton from "@/components/common/back-button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Search = () => {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

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
          <BackButton />
        </div>

        <div className="mx-auto w-full max-w-7xl p-5">
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
