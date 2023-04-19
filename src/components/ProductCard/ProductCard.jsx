// import { useState } from "react";

function ProductCard({ data, putProdToCart }) {
    return (
        <div className="flex flex-col gap-y-2 w-1/4 p-3 relative md:w-full md:mb-10">
            <div className="flex justify-center mb-4">
                <img
                    className="object-scale-down w-60 h-48"
                    src={data.pictures}
                    alt={data.name}
                />
            </div>
            {data.discount > 0 ? (
                <div className="relative">
                    <p className="text-black font-normal line-through text-[.6875rem] absolute bottom-4">
                        {new Intl.NumberFormat("ru-RU", {
                            style: "currency",
                            currency: "RUB",
                        }).format(data.price)}
                    </p>
                    <h3 className="text-sm text-red-600 font-bold">
                        {new Intl.NumberFormat("ru-RU", {
                            style: "currency",
                            currency: "RUB",
                        }).format(
                            data.price - (data.price * data.discount) / 100
                        )}
                    </h3>
                </div>
            ) : (
                <div className="">
                    <h3 className="text-sm font-bold">
                        {new Intl.NumberFormat("ru-RU", {
                            style: "currency",
                            currency: "RUB",
                        }).format(data.price)}
                    </h3>
                </div>
            )}
            <div className="text-xs text-gray-400">
                <p className="">{data.stock} шт</p>
            </div>
            <div className="grow text-xs">
                <p>{data.name}</p>
            </div>
            {!!data.discount && (
                <div className="bg-red-600 rounded-xl px-1.5 py-0.5 absolute top-2">
                    <p className="text-xs text-white">{` - ${data.discount}% `}</p>
                </div>
            )}
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
