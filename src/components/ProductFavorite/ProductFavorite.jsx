import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductSection from "../ProductSection/ProductSection";
import productsContext from "../../context/productsContext";

function ProductFavorite() {
    const navigate = useNavigate();
    const { displayedProducts, setDisplayedProducts, allProducts } =
        useContext(productsContext);

    useEffect(() => {
        setDisplayedProducts(allProducts?.filter((prod) => prod.favourite));
    }, []);

    return (
        <div>
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
                назад
            </span>

            <h2>Избранное</h2>
            {displayedProducts?.map((product) => (
                <p key={product._id}>{product.name}</p>
            ))}
        </div>
    );
}

export default ProductFavorite;
