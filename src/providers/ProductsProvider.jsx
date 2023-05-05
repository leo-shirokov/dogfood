import { useState, useEffect, useMemo } from "react";
import ProductsContext from "../context/productsContext";
import { getAllProducts } from "../api";

function ProductsProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [userId, setUserId] = useState("643ed1453291d790b3f34cd2");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const data = await getAllProducts();
                const orderedProducts =
                    data?.products?.map((p, i) => ({
                        ...p,
                        order: i,
                        favourite: p?.likes?.includes(userId),
                    })) ?? [];
                setTotal(data.total);
                setAllProducts(orderedProducts);
                setDisplayedProducts(orderedProducts);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const value = useMemo(
        () => ({
            allProducts,
            setAllProducts,
            displayedProducts,
            setDisplayedProducts,
            total,
            loading,
            searchItem,
            setSearchItem,
            userId,
            setUserId,
        }),
        [allProducts, loading, displayedProducts, total, searchItem, userId]
    );

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
