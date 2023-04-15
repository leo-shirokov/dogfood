import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ProductSection from "./components/ProductSection/ProductSection";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    const putProdToCart = (e) => {
        const callerId = e.target.value;
        const prod = products.find((p) => p.id === Number(callerId));
        setCart((prev) => [...prev, prod]);
    };

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch("http://fakestoreapi.com/products");
                const prods = await res.json();
                setProducts(prods);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="max-w-[90rem] mx-auto flex flex-col">
            <Header cart={cart} />
            <div className="w-4/5 mx-auto flex-initial md:w-11/12">
                <Banner />
                <ProductSection
                    products={products.slice(0, 4)}
                    putProdToCart={putProdToCart}
                />
                <p>реклама</p>
                <ProductSection
                    products={products.slice(4, 8)}
                    putProdToCart={putProdToCart}
                />
                {loading && <p>Loading...</p>}
            </div>
            <Footer />
        </div>
    );
}

export default App;
