import { useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import productsContext from "../../context/productsContext";
import { BiArrowBack } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import ProductCard from "../ProductCard/ProductCard";

function ProductFavorite() {
    const navigate = useNavigate();
    const { allProducts, userId, render } = useContext(productsContext);

    const products = useMemo(
        () => allProducts?.filter((prod) => prod.likes.includes(userId)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [render, allProducts, userId]
    );

    return (
        <div>
            <div
                className="inline-flex justify-start items-center cursor-pointer flex-nowrap text-sm text-gray-500"
                onClick={() => navigate(-1)}
            >
                <BiArrowBack />
                &nbsp;назад
            </div>

            <h2 className="text-xl font-semibold">Избранное</h2>
            <div className="flex justify-start flex-wrap">
                {products?.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                data={product}
                                ActiveImage={BiTrashAlt}
                            />
                        ))}
                    </>
                ) : (
                    <p>Empty</p>
                )}
            </div>
        </div>
    );
}

export default ProductFavorite;
