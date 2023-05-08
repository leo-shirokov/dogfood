import { useContext } from "react";
import productsContext from "../../context/productsContext";

export const Search = () => {
    const { searchItem, setSearchItem, setActivePage } =
        useContext(productsContext);

    const onChange = (e) => {
        setSearchItem(e.target.value);
        setActivePage(1);
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
