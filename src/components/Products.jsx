import ProductCard from "./ProductCard/ProductCard";

function Products({ products = [] }) {
    return (
        <div>
            {/* вывод товаров на главной странице */}
            <div className="flex justify-start flex-wrap">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        data={product}
                        // putProdToCart={
                        //     putProdToCart
                        // }
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
