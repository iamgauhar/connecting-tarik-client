import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [urls, setUrls] = useState([])
    const [smartphone, setSmartphone] = useState([]);
    const [products, setProducts] = useState([]);
    const [smartwatch, setSmartwatch] = useState([]);
    const [earbuds, setEarbuds] = useState([]);
    const [images, setImages] = useState([]);
    const [offer, setOffer] = useState([]);
    const [loading, setLoading] = useState(false);
    const [swId, setSwId] = useState("");
    const [ebId, setEbId] = useState("");
    return (
        <ItemContext.Provider value={{
            categories, setCategories,
            urls, setUrls,
            smartphone, setSmartphone,
            products, setProducts,
            smartwatch, setSmartwatch,
            earbuds, setEarbuds,
            images, setImages,
            offer, setOffer,
            categoryName, setCategoryName,
            loading, setLoading,
            swId, setSwId,
            ebId, setEbId
        }}>
            {children}
        </ItemContext.Provider>
    );
};

const useYourContext = () => useContext(ItemContext)

export { ItemContext, ItemContextProvider, useYourContext }