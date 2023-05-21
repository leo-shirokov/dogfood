import { useContext } from "react";
import productsContext from "../context/productsContext";
import { Pagination as MantinePagination } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Pagination() {
  const { searchItem, activePage, setActivePage } = useContext(productsContext);

  const navigate = useNavigate();
  const nav = (num) => {
    navigate(`/?page=${num}`);
    setActivePage(num);
  };

  return (
    <div className="flex justify-center my-10">
      {!searchItem && (
        <MantinePagination
          value={activePage}
          onChange={nav}
          total={15}
          color="yellow"
        />
      )}
    </div>
  );
}

export default Pagination;
