import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import TwoBanners from "./components/Banner/TwoBanners";
import Product from "./components/Product/Product";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductFavorite from "./components/ProductFavorite/ProductFavorite";
import Error404 from "./components/Error404/Error404";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import productsContext from "./context/productsContext";

function App() {
    const [cart, setCart] = useState([]);

    const {
        loading,
        displayedProducts,
        setDisplayedProducts,
        allProducts,
        searchItem,
    } = useContext(productsContext);

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

    const putProdToCart = (e) => {
        const callerId = e.target.value;
        const prod = displayedProducts.find((p) => p._id === Number(callerId));
        setCart((prev) => [...prev, prod]);
    };

    return (
        <div className="max-w-[90rem] mx-auto flex flex-col">
            <Header cart={cart} />
            <div className="w-4/6 mx-auto flex-initial lg:w-4/5 md:w-11/12">
                <Banner index={0} />
                {displayedProducts?.length > 0 ? (
                    <>
                        <Routes>
                            <Route
                                index
                                element={
                                    <>
                                        {searchItem && (
                                            <p>
                                                Количество товаров, найденных по
                                                вашему запросу:{" "}
                                                {displayedProducts.length}
                                            </p>
                                        )}
                                        <div className="flex justify-start items-center gap-x-4 mb-10 md:flex-col">
                                            {sortOptions.map((item) => (
                                                <span
                                                    key={item.group}
                                                    onClick={() =>
                                                        onSort(item.group)
                                                    }
                                                    className="text-md whitespace-nowrap text-gray-500 cursor-pointer md:text-sm"
                                                >
                                                    {item.title}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-start flex-wrap">
                                            {displayedProducts?.map(
                                                (product) => (
                                                    <ProductCard
                                                        key={product._id}
                                                        data={product}
                                                        putProdToCart={
                                                            putProdToCart
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    </>
                                }
                            />
                            <Route path="/product/:id" element={<Product />} />
                            <Route
                                path="/favorite"
                                element={<ProductFavorite />}
                            />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </>
                ) : (
                    <p>No data</p>
                )}
                <TwoBanners banIndex1={2} banIndex2={3} />
                {loading && (
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                    >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                )}
            </div>
            {/* <CreateProductForm /> */}
            <Footer />
        </div>
    );
}

export default App;
