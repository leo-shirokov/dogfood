import { useContext } from "react";
import productsContext from "../context/productsContext";

function usePagination(products = []) {
    const { activePage } = useContext(productsContext);
    const firstPageIndex = (activePage - 1) * 12;
    const lastPageIndex = firstPageIndex + 12;
    return products.slice(firstPageIndex, lastPageIndex);
}

export default usePagination;
