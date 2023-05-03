import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addLike, deleteLike } from "../../api";
import { Link } from "react-router-dom";

function stylePrice(arg) {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
    }).format(arg);
}

function ProductCard({ data, putProdToCart }) {
    const [like, setLike] = useState(false);

    useEffect(() => {
        (async () => {
            // обратиться к API: если текущий пользователь лайкнул уже данный товар
            // то установить переменную like в состояние true
            const userId = "643ed1453291d790b3f34cd2";
            if (data.likes.includes(userId)) setLike(true);
            else setLike(false);
        })();
    }, []);

    const toggleLike = async (e) => {
        if (!like) {
            await addLike(data._id);
        } else {
            await deleteLike(data._id);
        }
        setLike((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-y-2 p-3 relative md:w-full md:mb-10">
            <div className="flex justify-center mb-4">
                <Link to={`/product/${data._id}`}>
                    <img
                        className="object-scale-down w-60 h-48"
                        src={data.pictures}
                        alt={data.name}
                    />
                </Link>
            </div>
            {data.discount > 0 ? (
                <div className="relative">
                    <p className="text-black font-normal line-through text-[.6875rem] absolute bottom-4">
                        {stylePrice(data.price)}
                    </p>
                    <h3 className="text-sm text-red-600 font-bold">
                        {stylePrice(
                            data.price - (data.price * data.discount) / 100
                        )}
                    </h3>
                </div>
            ) : (
                <div className="">
                    <h3 className="text-sm font-bold">
                        {stylePrice(data.price)}
                    </h3>
                </div>
            )}
            <div className="text-xs text-gray-400">
                <p className="">{data.stock} шт</p>
            </div>
            <div className="grow text-xs">
                <Link to={`/product/${data._id}`}>
                    <p>{data.name}</p>
                </Link>
            </div>
            {!!data.discount && (
                <div className="bg-red-600 rounded-xl px-1.5 py-0.5 absolute top-2">
                    <p className="text-xs text-white">{` - ${data.discount}% `}</p>
                </div>
            )}

            <button onClick={toggleLike}>
                {like ? (
                    <FaHeart className="text-red-500 text-xl absolute top-2 right-2" />
                ) : (
                    <FaRegHeart className="text-red-500 text-xl absolute top-2 right-2" />
                )}
            </button>
            <div className="">
                <button
                    className="bg-yellow-300 px-4 py-2 rounded-3xl text-sm font-semibold"
                    value={data._id}
                    onClick={putProdToCart}
                >
                    В корзину
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
