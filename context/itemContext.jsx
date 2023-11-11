import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [urls, setUrls] = useState([])
    const [smartphone, setSmartphone] = useState([]);
    const [products, setProducts] = useState([]);
    const [smartwatch, setSmartwatch] = useState([]);
    const [earbuds, setEarbuds] = useState([]);
    return (
        <ItemContext.Provider value={{
            categories, setCategories,
            urls, setUrls,
            smartphone, setSmartphone,
            products, setProducts,
            smartwatch, setSmartwatch,
            earbuds, setEarbuds,
        }}>
            {children}
        </ItemContext.Provider>
    );
};

const useYourContext = () => useContext(ItemContext)

export { ItemContext, ItemContextProvider, useYourContext }