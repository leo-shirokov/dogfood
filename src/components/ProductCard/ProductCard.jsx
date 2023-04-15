import React from 'react';

function ProductCard({ data, putProdToCart }) {
    const { title, image, description, price, id } = data;
    return (
        <div className="grid justify-items-center w-60 p-3">
            <div>
                <img className="w-28" src={image} alt={title} />
            </div>
            <div className="">
                <h3>{price}</h3>
            </div>
            <div className="text-center p-2">
                <p>{title}</p>
            </div>
            <div className="text-xs text-justify">
                <p>{description}</p>
            </div>
            <div className="">
                <button value={id} onClick={putProdToCart}>
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
