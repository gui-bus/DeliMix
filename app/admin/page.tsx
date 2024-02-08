import { Button } from "@/components/ui/button";
import Link from "next/link";

const Admin = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col">
      <div className="p-5">
        <h1>Admin page</h1>

        <div className="flex items-center gap-5 flex-wrap">
          <Button
            variant={"default"}
            size={"lg"}
            className="hidden rounded-3xl md:flex"
            asChild
          >
            <Link
              href="/admin/new/category"
              className="flex w-full items-center justify-center gap-2"
            >
              Nova categoria
            </Link>
          </Button>

          <Button
            variant={"default"}
            size={"lg"}
            className="hidden rounded-3xl md:flex"
            asChild
          >
            <Link
              href="/admin/new/product"
              className="flex w-full items-center justify-center gap-2"
            >
              Novo produto
            </Link>
          </Button>

          <Button
            variant={"default"}
            size={"lg"}
            className="hidden rounded-3xl md:flex"
            asChild
          >
            <Link
              href="/admin/list/products"
              className="flex w-full items-center justify-center gap-2"
            >
              Lista de produtos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
