import { useState, useEffect, useContext } from "react";
import { searchProducts } from "../../api";
import productsContext from "../../context/productsContext";

export const Search = () => {
    const { setDisplayedProducts, products, searchItem, setSearchItem } =
        useContext(productsContext);
    const intervalSearch = useInterval(searchItem);

    useEffect(() => {
        (async () => {
            const searchResult = await searchProducts(intervalSearch);
            if (searchResult && searchResult.length > 0)
                setDisplayedProducts(searchResult);
            else setDisplayedProducts(products);
        })();
    }, [intervalSearch, setDisplayedProducts, products]);

    return (
        <input
            className="rounded-3xl bg-white w-full h-[2.625rem] caret-yellow-300 
            text-base text-gray-900 py-5 px-5 border-solid border-transparent"
            placeholder="Поиск"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />
    );
};

export const useInterval = (searchItem) => {
    const path = searchItem?.trim();
    const [intervalValue, setIntervalValue] = useState(path);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIntervalValue(path);
        }, 400);

        return () => clearTimeout(timeout);
    }, [path]);

    return intervalValue;
};
