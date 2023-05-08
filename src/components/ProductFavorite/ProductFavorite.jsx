import Back from "../Back/Back";
import { useContext } from "react";
import productsContext from "../../context/productsContext";
import { BiTrashAlt } from "react-icons/bi";
import ProductCard from "../ProductCard/ProductCard";

function ProductFavorite() {
    const { favourites } = useContext(productsContext);

    return (
        <div>
            <Back />

            <h2 className="text-xl font-semibold mb-6">Избранное</h2>
            <div className="flex justify-start flex-wrap">
                {favourites?.length > 0 ? (
                    <>
                        {favourites.map((product) => (
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
