import Back from "../Back/Back";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../api";
import { useState, useEffect, useCallback } from "react";
import { Modal, Paper, Text, NumberInput, Rating } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Delivery from "./Delivery";
import Reviews from "./Reviews";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({ reviews: [] });
    const [opened, { open, close }] = useDisclosure(false);
    const [textarea, setTextarea] = useState("");
    const [rating, setRating] = useState(5);

    function stylePrice(arg) {
        return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(arg);
    }

    // загружает информацию о продукте из API
    const loadProduct = useCallback(async () => {
        if (!id) return;
        try {
            setProduct(await getProductByID(id));
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    // при загрузке компонента загрузить один раз информацию о продукте
    useEffect(() => {
        loadProduct();
    }, [loadProduct]);

    return (
        <>
            <Back />
            <h1 className="text-xl font-bold mb-2">{product?.name}</h1>
            <div className="flex justify-start items-center gap-x-5">
                <Rating className="" value={rating} size="xs" readOnly />

                <a
                    href="#reviews"
                    className="text-xs text-yellow-600 hover:underline"
                >{`отзывов: ${product.reviews.length}`}</a>
            </div>

            <div className="bw-full flex gap-x-10 py-10 md:flex-col">
                <div className="w-1/2 md:w-full rounded-lg cursor-pointer hover:border hover:border-gray-100 hover:shadow-md">
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
                    <div className="flex justify-start items-center gap-x-10">
                        <NumberInput
                            className="w-20"
                            defaultValue={10}
                            type="number"
                            placeholder="1"
                            radius="xl"
                            size="md"
                            // onChange={}
                            min={1}
                            max={99}
                        />
                        <div>
                            <button className="w-26 shrink rounded-[3.75rem] bg-yellow-300 px-6 py-3 shadow-md font-bold">
                                В корзину
                            </button>
                        </div>
                    </div>

                    {/* Выведение информации о доставке и гарантии качества */}
                    <Delivery />
                </div>
            </div>

            <div className="flex flex-col gap-y-10 py-20">
                <Paper shadow="xs" p="sm">
                    <h2 className="text-xl font-semibold mb-2">Описание</h2>
                    <Text className="text-md font-normal">
                        {product.description}
                    </Text>
                </Paper>

                <Paper shadow="xs" p="sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Характеристики
                    </h2>
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
                </Paper>
            </div>

            <Reviews
                product={product}
                loadProduct={loadProduct}
                textarea={textarea}
                setTextarea={setTextarea}
                rating={rating}
                setRating={setRating}
            />
        </>
    );
}

export default Product;
