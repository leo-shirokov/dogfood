import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductSection({ products, putProdToCart }) {
    return (
        <div className="flex justify-between p-5 md:flex-col">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    data={product}
                    putProdToCart={putProdToCart}
                />
            ))}
        </div>
    );
}

export default ProductSection;
