
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="mt-10 mb-14">
      <div className="mb-8">
        <p className="pt-2 text-3xl text-gray-800 font-semibold">Products</p>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
