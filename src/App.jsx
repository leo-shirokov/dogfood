import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import TwoBanners from "./components/Banner/TwoBanners";
import Product from "./components/Product/Product";
import ProductSection from "./components/ProductSection/ProductSection";
import { Route, Routes } from "react-router-dom";
// import CreateProductForm from "./AddProduct/AddProduct";

import { getAllProducts } from "./api";
import { searchProducts } from "./api";
import { useInterval } from "./components/Search/Search";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const intervalSearch = useInterval(search);

    const putProdToCart = (e) => {
        const callerId = e.target.value;
        const prod = products.find((p) => p._id === Number(callerId));
        setCart((prev) => [...prev, prod]);
    };

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = !search?.trim()
                    ? (await getAllProducts())?.products
                    : await searchProducts(intervalSearch);
                setProducts(result ?? []);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [intervalSearch]);

    return (
        <div className="max-w-[90rem] mx-auto flex flex-col">
            <Header setSearch={setSearch} cart={cart} />
            <div className="w-4/6 mx-auto flex-initial md:w-11/12">
                <Banner index={0} />
                {products.length > 0 ? (
                    <>
                        <Routes>
                            <Route
                                index
                                element={
                                    <>
                                        <ProductSection
                                            products={products.slice(0, 4)}
                                            putProdToCart={putProdToCart}
                                        />
                                        <TwoBanners
                                            banIndex1={0}
                                            banIndex2={1}
                                        />
                                        <ProductSection
                                            products={products.slice(4, 8)}
                                            putProdToCart={putProdToCart}
                                        />
                                    </>
                                }
                            />
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </>
                ) : (
                    <p>No data</p>
                )}
                <TwoBanners banIndex1={2} banIndex2={3} />
                {loading && <p>Loading...</p>}
            </div>
            {/* <CreateProductForm /> */}
            <Footer />
        </div>
    );
}

export default App;
