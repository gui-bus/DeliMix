import { products } from "@/actions/products";
import ProductItem from "@/components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";

const ProductList = async () => {
  const productsData = await products();

  return (
    <section className="mx-auto w-full max-w-7xl p-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            isAdminPage={true}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
