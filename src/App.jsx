import { useState, useContext, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TwoBanners from "./components/Banner/TwoBanners";
import Product from "./components/Product/Product";
import ProductFavorite from "./components/ProductFavorite/ProductFavorite";
import Catalog from "./components/Catalog/Catalog";
import Promotions from "./components/Promotions/Promotions";
import News from "./components/News/News";
import Rewiews from "./components/Reviews/Reviews";
import Payment from "./components/Payment/Payment";
import Faq from "./components/Faq/Faq";
import Feedback from "./components/Feedback/Feedback";
import Contacts from "./components/Contacts/Contacts";
import Error404 from "./components/Error404/Error404";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import productsContext from "./context/productsContext";
import { NativeSelect } from "@mantine/core";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import usePagination from "./hooks/usePagination";

function App() {
    const [cart, setCart] = useState([]);

    const { loading, allProducts, searchItem, sortMode, setSortMode } =
        useContext(productsContext);

    // варианты сортировки
    const sortOptions = [
        { group: "all", title: "Все" },
        { group: "most-popular", title: "По популярности" },
        { group: "newest", title: "Новинки" },
        { group: "cheapest", title: "Сначала дешевые" },
        { group: "most-expensive", title: "Сначала дорогие" },
        { group: "highest-rated", title: "По рейтингу" },
        { group: "discounted", title: "По скидке" },
    ];
    // функция сортировки в зависимости от варианта сортировки
    const sort = useCallback(() => {
        let sortedProducts;
        if (sortMode === "all") {
            sortedProducts = allProducts.sort((a, b) => a.order - b.order);
        } else if (sortMode === "most-popular") {
            sortedProducts = allProducts.sort(
                (a, b) => b.likes.length - a.likes.length
            );
        } else if (sortMode === "newest") {
            sortedProducts = allProducts.sort(
                (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
            );
        } else if (sortMode === "cheapest") {
            sortedProducts = allProducts.sort((a, b) => a.price - b.price);
        } else if (sortMode === "most-expensive") {
            sortedProducts = allProducts.sort((a, b) => b.price - a.price);
        } else if (sortMode === "highest-rated") {
            sortedProducts = allProducts.sort((a, b) => {
                const raitingA = a.reviews.reduce(
                    (prev, el) => (prev + el.rating) / a.reviews.length,
                    0
                );
                const raitingB = b.reviews.reduce(
                    (prev, el) => (prev + el.rating) / b.reviews.length,
                    0
                );
                return raitingA - raitingB;
            });
        } else if (sortMode === "discounted") {
            sortedProducts = allProducts.sort(
                (a, b) => b.discount - a.discount
            );
        }
        return sortedProducts;
    }, [allProducts, sortMode]);

    const paginatedProds = usePagination(sort());

    // const putProdToCart = (e) => {
    //     const callerId = e.target.value;
    //     const prod = displayedProducts.find((p) => p._id === Number(callerId));
    //     setCart((prev) => [...prev, prod]);
    // };

    return (
        <div className="max-w-[90rem] h-full mx-auto flex flex-col">
            <Header cart={cart} />

            <div className="w-4/6 mx-auto flex-initial py-16 lg:w-4/5 md:w-11/12 md:py-8">
                {paginatedProds.length > 0 ? (
                    <>
                        <Routes>
                            <Route
                                index
                                element={
                                    <>
                                        {searchItem?.trim() && (
                                            <p className="text-gray-700 text-lg mb-5">
                                                По запросу{" "}
                                                <span className="font-bold">
                                                    {searchItem}
                                                </span>{" "}
                                                найдено {paginatedProds.length}{" "}
                                                товаров
                                            </p>
                                        )}
                                        {/* сортировка при поиске товаров */}
                                        {searchItem?.trim() && (
                                            <div className="flex justify-start items-center gap-x-4 mb-10 md:hidden">
                                                {sortOptions.map((item) => (
                                                    <span
                                                        key={item.group}
                                                        onClick={() =>
                                                            setSortMode(
                                                                item.group
                                                            )
                                                        }
                                                        className="text-md whitespace-nowrap text-gray-500 cursor-pointer md:text-sm"
                                                    >
                                                        {item.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {/* сортировка через select при поиске товаров на мобильном устройстве */}
                                        {searchItem?.trim() && (
                                            <div className="flex justify-center items-center my-4 md:block lg:hidden xl:hidden 2xl:hidden">
                                                <NativeSelect
                                                    data={sortOptions.map(
                                                        (item) => ({
                                                            label: item.title,
                                                            value: item.group,
                                                        })
                                                    )}
                                                    onChange={(event) =>
                                                        setSortMode(
                                                            event.currentTarget
                                                                .value
                                                        )
                                                    }
                                                />
                                            </div>
                                        )}
                                        {/* вывод товаров на главной странице */}
                                        <Products products={paginatedProds} />
                                        {/* настройки пагинации */}
                                        <Pagination />
                                    </>
                                }
                            />
                            <Route path="/product/:id" element={<Product />} />
                            <Route
                                path="/favorite"
                                element={<ProductFavorite />}
                            />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route
                                path="/promotions"
                                element={<Promotions />}
                            />
                            <Route path="/news" element={<News />} />
                            <Route path="/rewiews" element={<Rewiews />} />
                            <Route path="/payments" element={<Payment />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/feedback" element={<Feedback />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </>
                ) : (
                    <p>...</p>
                )}

                <TwoBanners banIndex1={2} banIndex2={3} />

                {/* loader */}
                {loading && (
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                    >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Загрузка...
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
