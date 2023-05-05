import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../api";
import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

import quality from "./img/quality.svg";

function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    function stylePrice(arg) {
        return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(arg);
    }

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                setProduct(await getProductByID(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
        <>
            <div
                className="inline-flex justify-start items-center cursor-pointer flex-nowrap text-sm text-gray-500"
                onClick={() => navigate(-1)}
            >
                <BiArrowBack />
                &nbsp;назад
            </div>
            <h1 className="text-xl font-bold">{product?.name}</h1>

            <div className="w-full flex gap-x-10 py-10 md:flex-col">
                <div className="w-1/2">
                    <img
                        className="object-scale-down"
                        src={product.pictures}
                        alt={product.name}
                    />
                </div>
                <div className="flex flex-col w-1/2 gap-y-10">
                    <div>
                        {product.discount > 0 ? (
                            <div className="relative">
                                <p className="text-black font-normal line-through text-sm absolute bottom-5">
                                    {stylePrice(product.price)}
                                </p>
                                <h3 className="text-xl text-red-600 font-bold">
                                    {stylePrice(
                                        product.price -
                                            (product.price * product.discount) /
                                                100
                                    )}
                                </h3>
                            </div>
                        ) : (
                            <div className="">
                                <h3 className="text-xl font-bold">
                                    {stylePrice(product.price)}
                                </h3>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className="w-40 shrink rounded-[3.75rem] bg-yellow-300 px-7 py-4 shadow-md font-bold">
                            В корзину
                        </button>
                    </div>
                    <div className="flex justify-start flex-col gap-y-3 bg-gray-100 rounded-xl px-5 py-3">
                        <div className="flex flex-row items-center gap-x-3">
                            <img src={quality} alt="quality" />
                            <h2 className="text-md font-semibold">
                                Гарантия качества
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm">
                                Если Вам не понравилось качество нашей
                                продукции, мы вернем деньги, либо сделаем все
                                возможное, чтобы удовлетворить ваши нужды.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-10 py-10">
                <div>
                    <h2 className="text-xl font-semibold">Описание</h2>
                    <p className="text-md font-normal">{product.description}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Характеристики</h2>
                    <div className="flex flex-start gap-x-5">
                        <div className="text-gray-600">
                            <p>Вес &nbsp;</p>
                            <p>Цена &nbsp;</p>
                        </div>
                        <div>
                            <p className="text-md font-normal">
                                {product.wight}
                            </p>
                            <p className="text-md font-normal">
                                {stylePrice(product.price)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
