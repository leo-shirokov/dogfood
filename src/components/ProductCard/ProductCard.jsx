// import { useState } from "react";

function ProductCard({ data, putProdToCart }) {
    return (
        <div className="flex flex-col gap-y-2 w-1/4 p-3 md:w-full md:mb-10">
            <div className="flex justify-center">
                <img
                    className="object-scale-down w-60 h-48"
                    src={data.pictures}
                    alt={data.name}
                />
            </div>
            <div className="">
                <h3 className="text-sm text-red-500 font-bold">
                    {data.price} ₽
                </h3>
            </div>
            <div className="text-xs text-gray-400">
                <p className="relative top-2">{data.stock} шт</p>
            </div>
            <div className="grow text-xs">
                <p>{data.name}</p>
            </div>
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
/*
{
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}
*/
