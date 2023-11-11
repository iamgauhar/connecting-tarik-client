// import { useYourContext } from "../context/itemContext";

// const { products } = useYourContext


export function displayProductsByCategory(categoryName, products) {
    // Filter products by category
    // console.log(categoryName, products)
    let filteredProducts = products.filter(product => product.categoryId.name === categoryName);
    return filteredProducts;
}
