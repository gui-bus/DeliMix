import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prismaClient } from "@/lib/prisma";
import ProductsSection from "@/sections/products-section";

const MenuItems = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <span className="font-light text-primary">CARDÁPIO</span>
        <h2 className="text-2xl font-black italic uppercase">
          Explore nossa seleção de sabores únicos
        </h2>

        <p className="text-center text-sm font-light dark:text-white/70">
          Desde clássicos irresistíveis até novidades limitadas, temos algo para
          satisfazer todos os paladares
        </p>
      </div>

      <Tabs
        defaultValue="Pizzas"
        className="flex w-full flex-col items-center justify-center"
      >
        <TabsList className="px-2">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.name}
            className="w-full"
          >
            <ProductsSection categoryName={category.name} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuItems;
