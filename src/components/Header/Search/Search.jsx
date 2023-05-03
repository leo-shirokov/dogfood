import { useState, useEffect } from "react";

export const Search = ({ setSearch }) => {
    return (
        <input
            className="rounded-3xl bg-white w-full h-[2.625rem] caret-yellow-300 
            text-base text-gray-900 py-5 px-5 border-solid border-transparent"
            placeholder="Поиск"
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export const useInterval = (path) => {
    const [intervalValue, setIntervalValue] = useState(path);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIntervalValue(path);
        }, 400);

        return () => clearTimeout(timeout);
    }, [path]);

    return intervalValue;
};
