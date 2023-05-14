import { useState, useEffect, useMemo, useCallback } from "react";
import ProductsContext from "../context/productsContext";
import { getAllProducts, searchProducts, deleteLike, addLike } from "../api";

function ProductsProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [searchItem, setSearchItem] = useState("");
    const [userId, setUserId] = useState("643ed1453291d790b3f34cd2");
    const [loading, setLoading] = useState(false);
    const [render, setRender] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [sortMode, setSortMode] = useState("all");

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

    const favourites = allProducts?.filter((prod) =>
        prod.likes.includes(userId)
    );

    const toggleLike = useCallback(
        async (productData) => {
            setRender((ren) => ren + 1);
            const isLiked = productData?.likes?.includes(userId);
            setAllProducts((products) => {
                const product = products.find((p) => p._id === productData._id);
                if (isLiked) {
                    const likesIndex = product.likes.indexOf(userId);
                    product.likes.splice(likesIndex, 1);
                } else {
                    product.likes.push(userId);
                }
                return products;
            });
            if (isLiked) {
                await deleteLike(productData._id);
            } else {
                await addLike(productData._id);
            }
        },
        [userId]
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
            sortMode,
            setSortMode,
            toggleLike,
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
            sortMode,
            toggleLike,
        ]
    );

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
