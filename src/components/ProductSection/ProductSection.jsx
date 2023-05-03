import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductSection({ products, search, onSort, putProdToCart }) {
    const sortedProducts = [
        { group: "most-popular", title: "Популярные" },
        { group: "newest", title: "Новинки" },
        { group: "cheapest", title: "Дешевые" },
        { group: "most-expensive", title: "Дорогие" },
        { group: "highest-rated", title: "Популярные" },
        { group: "discounted", title: "По скидке" },
    ];

    return (
        <>
            {search && (
                <p>
                    Количество товаров, найденных по вашему запросу:{" "}
                    {products.length}
                </p>
            )}
            <div>
                {sortedProducts.map((item) => (
                    <span key={item.group} onClick={() => onSort(item.group)}>
                        {item.title}
                    </span>
                ))}
            </div>
            <div className="flex justify-between my-5 md:flex-col">
                {products.map((product) => (
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
