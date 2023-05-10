import Back from "../Back/Back";
import { useContext } from "react";
import productsContext from "../../context/productsContext";
import { BiTrashAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { CgSmileSad } from "react-icons/cg";
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
                    <div className="mx-auto flex flex-col justify-center items-center">
                        <span className="text-7xl text-gray-400 mb-6">
                            <CgSmileSad />
                        </span>
                        <p className="text-md font-semibold mb-5">
                            В избранном пока ничего нет
                        </p>
                        <p className="mb-2">
                            Добавьте товары в Избранное с помощью лайка по
                            карточке товара
                        </p>
                        <span className="text-2xl text-red-600">
                            <BsHeart />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductFavorite;
