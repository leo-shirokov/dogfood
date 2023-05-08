import Back from "../Back/Back";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../api";
import { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import quality from "./img/quality.svg";
import track from "./img/Truck.svg";

function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [opened, { open, close }] = useDisclosure(false);

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
            <Back />
            <h1 className="text-xl font-bold">{product?.name}</h1>

            <div className="bw-full flex gap-x-10 py-10 md:flex-col">
                <div className="w-1/2 md:w-full cursor-pointer">
                    <img
                        className="object-scale-down"
                        src={product.pictures}
                        alt={product.name}
                        onClick={open}
                    />
                </div>
                <Modal
                    opened={opened}
                    onClose={close}
                    title={product?.name}
                    size="calc(100vw - 3rem)"
                    centered
                >
                    <div className="w-full flex justify-center md:w-full cursor-pointer">
                        <img
                            className="object-scale-down w-[37.5rem]"
                            src={product.pictures}
                            alt={product.name}
                        />
                    </div>
                </Modal>
                <div className="flex flex-col w-1/2 gap-y-10 md:w-full">
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
                    <div className="flex fle-col justify-start items-start gap-4 bg-gray-100 rounded-xl px-5 py-3">
                        <div className="w-20">
                            <img src={quality} alt="quality" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold">
                                Гарантия качества
                            </h2>
                            <p className="text-sm">
                                Если Вам не понравилось качество нашей
                                продукции, мы вернем деньги, либо сделаем все
                                возможное, чтобы удовлетворить ваши нужды.
                            </p>
                        </div>
                    </div>
                    <div className="flex fle-col justify-start items-start gap-4 bg-gray-100 rounded-xl px-5 py-3">
                        <div className="w-8">
                            <img src={track} alt="quality" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold">
                                Доставка по всему миру
                            </h2>
                            <br />
                            <div className="text-sm leading-7">
                                <p>Доставка курьером — от 399 ₽</p>
                                <p>Доставка в пункт выдачи — от 199</p>
                            </div>
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
