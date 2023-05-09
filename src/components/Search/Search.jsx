import { useContext } from "react";
import productsContext from "../../context/productsContext";

export const Search = () => {
    const { searchItem, setSearchItem, setActivePage, setSortMode } =
        useContext(productsContext);

    const onChange = (e) => {
        const searchText = e.target.value;
        setSearchItem(searchText);
        setActivePage(1);
        if (searchText === "") {
            setSortMode("all");
        }
    };
    return (
        <input
            className="rounded-3xl bg-white w-full h-[2.625rem] caret-yellow-300 
            text-base text-gray-900 py-5 px-5 border-solid border-transparent"
            placeholder="Поиск"
            value={searchItem}
            onChange={onChange}
        />
    );
};
