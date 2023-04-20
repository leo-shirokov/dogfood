import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import TwoBanners from "./components/Banner/TwoBanners";
import ProductSection from "./components/ProductSection/ProductSection";
// import CreateProductForm from "./AddProduct/AddProduct";

import { getAllProducts } from "./api";
import { searchProducts } from "./api";
import { useDebounce } from "./components/Header/Search/Search";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const debounceValueInApp = useDebounce(search);
    // console.log(debounceValueInApp);

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
                    : await searchProducts(debounceValueInApp);
                setProducts(result ?? []);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [debounceValueInApp]);

    return (
        <div className="max-w-[90rem] mx-auto flex flex-col">
            <Header setSearch={setSearch} cart={cart} />
            <div className="w-4/6 mx-auto flex-initial md:w-11/12">
                <Banner index={0} />
                {products.length > 0 ? (
                    <>
                        <ProductSection
                            products={products.slice(0, 4)}
                            putProdToCart={putProdToCart}
                        />
                        <TwoBanners banIndex1={0} banIndex2={1} />
                        <ProductSection
                            products={products.slice(4, 8)}
                            putProdToCart={putProdToCart}
                        />
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
