import productsContext from "../../context/productsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function stylePrice(arg) {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
    }).format(arg);
}

function ProductCard({
    data,
    putProdToCart,
    ActiveImage = FaHeart,
    InactiveImage = FaRegHeart,
}) {
    const { userId, toggleLike } = useContext(productsContext);
    const isLiked = data?.likes?.includes(userId);
    const location = useLocation();

    return (
        <div className="w-1/4 flex flex-col gap-y-2 px-3 py-6 relative md:w-1/3 sm:w-1/2 md:mb-10 hover:border hover:border-gray-100 hover:rounded-md hover:shadow-md">
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
            {data.stock ? (
                <div className="text-xs text-gray-400">
                    <p className="">{data.stock} шт</p>
                </div>
            ) : (
                <div className="text-xs text-gray-400">
                    <p className="">нет в наличии</p>
                </div>
            )}
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
            {data.tags[0] !== "new" ? (
                <div className="hidden"></div>
            ) : (
                <div className="bg-lime-600 opacity-90 rounded px-3 py-0.5 absolute left-3 top-48 -rotate-12">
                    <p className="text-xs text-white">{data.tags[0]}</p>
                </div>
            )}
            {data.tags[1] !== "sale" ? (
                <div className="hidden"></div>
            ) : (
                <div className="bg-blue-600 opacity-90 rounded px-3 py-0.5 absolute right-4 top-48 -rotate-12">
                    <p className="text-xs text-white">{data.tags[1]}</p>
                </div>
            )}

            <button onClick={() => toggleLike(data)}>
                {isLiked ? (
                    <ActiveImage className="text-red-500 text-xl absolute top-2 right-2" />
                ) : (
                    <InactiveImage className="text-gray-400 text-xl absolute top-2 right-2" />
                )}
            </button>
            {location.pathname === "/" && (
                <div className="">
                    <button
                        className="bg-yellow-300 px-4 py-2 rounded-3xl text-sm font-semibold shadow-md"
                        value={data._id}
                        onClick={putProdToCart}
                    >
                        В корзину
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductCard;
