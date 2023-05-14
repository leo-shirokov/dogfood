import { useState } from "react";
import { addProduct } from "../../api";
import { NumberInput, TextInput, Checkbox } from "@mantine/core";

const CreateProductForm = () => {
    const [available, setAvailable] = useState(false);
    const [pictures, setPictures] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [stock, setStock] = useState(0);
    const [wight, setWight] = useState("");
    const [description, setDescription] = useState("");

    const createProduct = async (e) => {
        e.preventDefault();
        await addProduct({
            available,
            pictures,
            name,
            price,
            discount,
            stock,
            wight,
            description,
        });
        setAvailable(false);
        setPictures("");
        setName("");
        setPrice(0);
        setDiscount(0);
        setStock(0);
        setWight("");
        setDescription("");
    };

    return (
        <>
            <h2 className="text-lg font-semibold mb-10">
                Форма добавления товара
            </h2>
            <form
                className="w-full mx-auto flex flex-col gap-y-5"
                onSubmit={createProduct}
            >
                <TextInput
                    label="Название продукта"
                    description="Введите название продукта"
                    onChange={(event) => setName(event.currentTarget.value)}
                    value={name}
                    required
                />
                <TextInput
                    label="Изображение продукта"
                    description="Введите url ссылку на фото продукта"
                    onChange={(event) => setPictures(event.currentTarget.value)}
                    value={pictures}
                    required
                />
                <Checkbox
                    checked={available}
                    label="Товар имеется в наличии"
                    onChange={(event) =>
                        setAvailable(event.currentTarget.checked)
                    }
                    required
                />
                <NumberInput
                    label="Цена продукта"
                    description="Укажите цену продукта"
                    placeholder="Цена*"
                    onChange={setPrice}
                    value={price}
                    required
                />
                <NumberInput
                    label="Скидка на продукт"
                    description="Укажите размер скидки на продукт"
                    placeholder="Скидка"
                    onChange={setDiscount}
                    value={discount}
                />
                <NumberInput
                    label="Количество товара"
                    description="Укажите количество товара"
                    value={stock}
                    type="number"
                    placeholder="0"
                    onChange={setStock}
                    min={0}
                    max={999}
                />
                <TextInput
                    label="Вес продукта"
                    description="Введите вес продукта в граммах"
                    onChange={(event) => setWight(event.currentTarget.value)}
                    value={wight}
                />
                <TextInput
                    label="Описание продукта"
                    description="Подробное описание продукта"
                    onChange={(event) =>
                        setDescription(event.currentTarget.value)
                    }
                    value={description}
                    required
                />
                <div className="flex justify-start my-5">
                    <button
                        className="bg-gray-100 px-4 py-1 rounded-md text-sm hover:bg-gray-200"
                        type="submit"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateProductForm;
