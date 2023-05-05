import { useState } from "react";
import { addProduct } from "../../api";

const CreateProductForm = () => {
    const [newProduct, setNewProduct] = useState({
        available: false,
        pictures: "",
        name: "",
        price: 0,
        discount: 0,
        stock: 0,
        wight: "",
        description: "",
    });

    const createProduct = async (e) => {
        e.preventDefault();

        await addProduct(newProduct);
    };
    //тут закрыть модалку или очистить поля формы
    return (
        <form
            className="grid max-w-[90rem] mx-auto mt-10 p-5 border-2"
            onSubmit={createProduct}
        >
            <input
                type="checkbox"
                placeholder="Описание*"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        available: e.target.value,
                    }))
                }
                value={newProduct.available}
            />
            <input
                placeholder="Сслыка на изображение"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        pictures: e.target.value,
                    }))
                }
                value={newProduct.pictures}
            />
            <input
                placeholder="Название продукта*"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }))
                }
                value={newProduct.name}
            />
            <input
                placeholder="Цена*"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        price: e.target.value,
                    }))
                }
                value={newProduct.price}
            />
            <input
                placeholder="Скидка"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        discount: e.target.value,
                    }))
                }
                value={newProduct.discount}
            />
            <input
                placeholder="Количество в наличии"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        stock: e.target.value,
                    }))
                }
                value={newProduct.stock}
            />
            <input
                placeholder="Вес"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        wight: e.target.value,
                    }))
                }
                value={newProduct.wight}
            />
            <input
                placeholder="Описание*"
                onChange={(e) =>
                    setNewProduct((prev) => ({
                        ...prev,
                        description: e.target.value,
                    }))
                }
                value={newProduct.description}
            />
            <button className="bg-gray-100" type="submit">
                Сохранить
            </button>
        </form>
    );
};

export default CreateProductForm;
