import ProductItem from "@/components/product-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { prismaClient } from "@/lib/prisma";

const ProductsSection = async () => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        name: 'Bebidas'
      },
    },
  });

  return (
    <div className="py-10">
      <Carousel className="mx-auto w-full max-w-7xl px-5">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              className="md:basis-1/3 lg:basis-1/4"
              key={product.id}
            >
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default ProductsSection;
