import { useContext } from "react";
import Back from "../Back/Back";
import Products from "../Products";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination";
import productsContext from "../../context/productsContext";

function Catalog() {
    const { allProducts } = useContext(productsContext);
    const products = usePagination(allProducts);
    console.log(allProducts);
    return (
        <>
            <Back />
            <Products products={products} />
            <Pagination />
        </>
    );
}

export default Catalog;
