import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import productsContext from "../../context/productsContext";

function ProductSection({ products, putProdToCart }) {
    const { displayedProducts, setDisplayedProducts, allProducts, searchItem } =
        useContext(productsContext);

    const sortOptions = [
        { group: "all", title: "Все" },
        { group: "most-popular", title: "По популярности" },
        { group: "newest", title: "Новинки" },
        { group: "cheapest", title: "Сначала дешевые" },
        { group: "most-expensive", title: "Сначала дорогие" },
        { group: "highest-rated", title: "По рейтингу" },
        { group: "discounted", title: "По скидке" },
    ];

    const onSort = (group) => {
        if (group === "all") {
            const sortedProducts = allProducts.sort(
                (a, b) => a.order - b.order
            );
            setDisplayedProducts([...sortedProducts]);
        } else if (group === "cheapest") {
            const sortedProducts = allProducts.sort(
                (a, b) => a.price - b.price
            );
            setDisplayedProducts([...sortedProducts]);
        } else if (group === "most-expensive") {
            const sortedProducts = allProducts.sort(
                (a, b) => b.price - a.price
            );
            setDisplayedProducts([...sortedProducts]);
        } else if (group === "discounted") {
            const sortedProducts = allProducts.sort(
                (a, b) => b.discount - a.discount
            );
            setDisplayedProducts([...sortedProducts]);
        }
    };

    return (
        <>
            {searchItem && (
                <p>
                    Количество товаров, найденных по вашему запросу:{" "}
                    {displayedProducts.length}
                </p>
            )}
            <div className="flex justify-start items-center gap-x-4 md:flex-col">
                {sortOptions.map((item) => (
                    <span
                        key={item.group}
                        onClick={() => onSort(item.group)}
                        className="text-md whitespace-nowrap text-gray-500 cursor-pointer md:text-xs"
                    >
                        {item.title}
                    </span>
                ))}
            </div>
            <div className="flex justify-between my-5 md:flex-col">
                {products?.map((product) => (
                    <ProductCard
                        key={product._id}
                        data={product}
                        putProdToCart={putProdToCart}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductSection;
