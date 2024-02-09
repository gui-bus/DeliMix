import ProductItem from "@/components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { redirect } from "next/navigation";

interface BarbershopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  if (!searchParams.search) {
    return redirect("/");
  }

  const products = await prismaClient.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams.search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: searchParams.search,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return (
    <div className="mx-auto w-full max-w-7xl p-5">
      <h1 className="flex items-center gap-2 text-xl font-semibold dark:text-white">
        Exibindo resultados de pesquisa para &quot;{searchParams.search}&quot;
      </h1>

      {products.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: Product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
              isAdminPage={false}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-sm font-light">
            Oops! Não foi possível encontrar algo com o termo pesquisado.
          </p>
        </div>
      )}
    </div>
  );
};

export default BarbershopsPage;
