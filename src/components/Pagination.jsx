import { useContext } from "react";
import productsContext from "../context/productsContext";
import { Pagination as MantinePagination } from "@mantine/core";

function Pagination() {
    const { searchItem, activePage, setActivePage } =
        useContext(productsContext);

    return (
        <div className="flex justify-center my-10">
            {!searchItem && (
                <MantinePagination
                    value={activePage}
                    onChange={setActivePage}
                    total={15}
                    color="yellow"
                />
            )}
        </div>
    );
}

export default Pagination;
