import { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import TwoBanners from "./components/Banner/TwoBanners";
import Product from "./components/Product/Product";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductFavorite from "./components/ProductFavorite/ProductFavorite";
import { Route, Routes } from "react-router-dom";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import productsContext from "./context/productsContext";

function App() {
    const [cart, setCart] = useState([]);
    const { loading, displayedProducts } = useContext(productsContext);
    const [favorite, useFavorite] = useState([]);

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
                                        <ProductSection
                                            products={displayedProducts.slice(
                                                0,
                                                4
                                            )}
                                            putProdToCart={putProdToCart}
                                        />
                                        <TwoBanners
                                            banIndex1={0}
                                            banIndex2={1}
                                        />
                                        <ProductSection
                                            products={displayedProducts.slice(
                                                4,
                                                8
                                            )}
                                            putProdToCart={putProdToCart}
                                        />
                                        <ProductSection
                                            products={displayedProducts.slice(
                                                8,
                                                12
                                            )}
                                            putProdToCart={putProdToCart}
                                        />
                                    </>
                                }
                            />
                            <Route path="/product/:id" element={<Product />} />
                            <Route
                                path="/favorite"
                                element={<ProductFavorite />}
                            />
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
