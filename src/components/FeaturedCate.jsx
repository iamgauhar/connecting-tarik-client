
import { useEffect, useState } from "react";
import CateCard from "./CateCard";
import { getCategories } from "../../config/apiUrl";

const FeaturedCate = () => {

  const [categories, setCategories] = useState([])
  const allCategories = async () => {
    const allCategoryList = await fetch(getCategories, {
      method: 'GET',
    });

    // console.log(await allProductList.json());
    const response = await allCategoryList.json();
    setCategories(response.categories);
    // console.log(response.categories);
  };

  useEffect(() => {
    try {
      allCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="py-4">
      <div className="flex gap-4 flex-wrap justify-center md:justify-between">
        {/* <CateCard /> */}
        {
          categories.map((item) => {
            return (
              <CateCard item={item} key={item._id} />
            )
          })
        }
      </div>
    </div>
  );
};

export default FeaturedCate;
