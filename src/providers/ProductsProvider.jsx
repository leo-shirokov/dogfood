import { useState, useEffect, useMemo } from "react";
import ProductsContext from "../context/productsContext";
import { getAllProducts, searchProducts } from "../api";

function ProductsProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [searchItem, setSearchItem] = useState("");
    const [userId, setUserId] = useState("643ed1453291d790b3f34cd2");
    const [loading, setLoading] = useState(false);
    const [render, setRender] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const trimmedItem = searchItem.trim();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let products;
                if (trimmedItem) {
                    const data = await searchProducts(trimmedItem);
                    products = data;
                    setTotal(products?.length ?? 0);
                } else {
                    const data = await getAllProducts();
                    products = data?.products;
                    setTotal(data.total);
                }
                const orderedProducts =
                    products?.map((p, i) => ({
                        ...p,
                        order: i,
                    })) ?? [];
                setAllProducts(orderedProducts);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [trimmedItem]);

    const favourites = useMemo(
        () => allProducts?.filter((prod) => prod.likes.includes(userId)),
        [render, allProducts, userId]
    );

    const value = useMemo(
        () => ({
            allProducts,
            setAllProducts,
            total,
            loading,
            searchItem,
            setSearchItem,
            userId,
            setUserId,
            render,
            setRender,
            favourites,
            activePage,
            setActivePage,
        }),
        [
            allProducts,
            loading,
            total,
            searchItem,
            userId,
            render,
            favourites,
            activePage,
        ]
    );

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
