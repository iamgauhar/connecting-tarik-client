
import { useEffect } from "react";
import { useYourContext } from "../../context/itemContext";
import ProductCard from "./ProductCard";
import { getProducts } from "../../config/apiUrl";
import { displayProductsByCategory } from "../../utils/filterProduct.js";

const Products = () => {

  const { smartphone, setSmartphone } = useYourContext()
  const { earbuds, setEarbuds } = useYourContext()
  const { smartwatch, setSmartwatch } = useYourContext()

  const allProducts = async () => {

    const linkList = await fetch(getProducts, {
      method: 'GET',
    });
    const response = await linkList.json();

    setSmartphone(displayProductsByCategory("Smartphone", response.products))
    setSmartwatch(displayProductsByCategory("Smartwatch", response.products))
    setEarbuds(displayProductsByCategory("Earbuds", response.products))

  };


  useEffect(() => {
    try {
      allProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (

    <>
      <div className="mt-10 mb-14">
        <div className="mb-4">
          <p className="pt-2 text-3xl text-gray-800 font-semibold">Smartphones</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">

          {

            smartphone.slice(0, 3).map((item) => {
              return (
                <ProductCard item={item} key={item._id} />
              )
            })
          }

        </div>
      </div>
      <div className="mt-10 mb-14">
        <div className="mb-4">
          <p className="pt-2 text-3xl text-gray-800 font-semibold">Smartwatch</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">

          {

            smartwatch.slice(0, 3).map((item) => {
              return (
                <ProductCard item={item} key={item._id} />
              )
            })
          }

        </div>
      </div>
      <div className="mt-10 mb-14">
        <div className="mb-4">
          <p className="pt-2 text-3xl text-gray-800 font-semibold">Earbuds</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">

          {

            earbuds.slice(0, 3).map((item) => {
              return (
                <ProductCard item={item} key={item._id} />
              )
            })
          }

        </div>
      </div>
    </>
  );
};

export default Products;
