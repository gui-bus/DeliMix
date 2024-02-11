import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/common/back-button";
import { MdAssignmentAdd, MdAddToPhotos } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";

const Admin = () => {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

  return (
    <section className="flex w-full flex-col">
      <div className="relative">
        <Image
          src="/adminBanner.png"
          alt="DeliMix Banner - Painel de controle"
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
        <div className="flex flex-col items-center justify-center gap-2 p-5">
          <h1 className="text-center text-xl font-black uppercase italic md:text-3xl">
            Painel Administrativo
          </h1>
          <p className="text-sm font-light dark:text-white/70 md:text-base">
            Bem-vindo ao painel de controle para administradores. Aqui, você
            poderá gerenciar todas as informações disponíveis no cardápio com
            facilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-xl"
            asChild
          >
            <Link
              href="/admin/new/category"
              className="flex w-full items-center justify-center gap-2"
            >
              Cadastrar uma nova categoria <MdAddToPhotos size={25} />
            </Link>
          </Button>

          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-xl"
            asChild
          >
            <Link
              href="/admin/new/product"
              className="flex w-full items-center justify-center gap-2"
            >
              Adicionar produtos ao cardápio <MdAssignmentAdd size={25} />
            </Link>
          </Button>

          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-xl"
            asChild
          >
            <Link
              href="/admin/list/products"
              className="flex w-full items-center justify-center gap-2"
            >
              Listar produtos já cadastrados <BiSolidFoodMenu size={25} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
