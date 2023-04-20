// GET https://api.react-learning.ru/products // получение всех товаров
// GET https://api.react-learning.ru/products/search?query=запрос // для поиска товаров
// GET https://api.react-learning.ru/products/:id // получение товaра по id
// PATCH https://api.react-learning.ru/products/:productId //редактирование товара по id
// DELETE https://api.react-learning.ru/products/:productId //удаление товара по id
// POST https://api.react-learning.ru/products // создание нового товара
// const newProduct = {
//     available: true, // boolean
//     pictures: "https://react-learning.ru/image-compressed/2.jpg", // string
//     name: "Куриные желудочки для собак", // string, обязательное
//     price: 450, // number, обязательное
//     discount: 10, // number
//     stock: 10, // number
//     wight: "100 г", // string
//     description: "Описание demo", // string, обязательное
// };
// PUT https://api.react-learning.ru/products/likes/:productId // установка лайка по id
// DELETE https://api.react-learning.ru/products/likes/:productId // снятие лайка по id
// POST https://api.react-learning.ru/products/review/:productId // добавление отзыва по id
// DELETE https://api.react-learning.ru/products/review/:productId/:reviewId // удаление отзыва по id
// GET https://api.react-learning.ru/products/review/ // получение всех отзывов
// GET https://api.react-learning.ru/products/review/:productId // получение отзывов конкрентного товара.

//ПОЛЬЗОВАТЕЛЬ
// GET https://api.react-learning.ru/users //получение всех пользователей
// GET https://api.react-learning.ru/users/me // получение информации о пользователе по токену в заголовках
// GET https://api.react-learning.ru/users/:userId // получение информации о пользователе по его id
// PATCH https://api.react-learning.ru/users/me // изменение name и about
// PATCH https://api.react-learning.ru/users/me/avatar // изменение avatar

//РЕГИСТРАЦИЯ
// POST https://api.react-learning.ru/signup // регистрация { ...data, group: 'group-id'}
// POST https://api.react-learning.ru/signin // авторизация
// POST https://api.react-learning.ru/forgot-password // сброс пароля на почту
// PATCH https://api.react-learning.ru/password-reset/:token // смена пароля после подтвержения токеном

export const baseUrl = "https://api.react-learning.ru/products/";
export const auth =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlZDE0NTMyOTFkNzkwYjNmMzRjZDIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODM4NDc0LCJleHAiOjE3MTMzNzQ0NzR9.GX6DSN6V_eJJ85fLMO_0T5J5KRD2a2pvmtYjHow3yRg";

export const printError = async (res) => {
    if (!res.ok) throw new Error("Ошибка");
    return res.json();
};

export const getAllProducts = async () => {
    const res = await fetch(baseUrl, {
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

export const searchProducts = async (path) => {
    const res = await fetch(`${baseUrl}search?query=${path}`, {
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

export const addProduct = async (newProduct) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: auth,
        },
        body: JSON.stringify(newProduct),
    });
    return printError(res);
};

export const addLike = async (id) => {
    const res = await fetch(`${baseUrl}likes/${id}`, {
        method: "PUT",
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

export const deleteLike = async (id) => {
    const res = await fetch(`${baseUrl}likes/${id}`, {
        method: "DELETE",
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

export const updateProduct = async (id) => {
    const res = await fetch(`${baseUrl}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: auth,
        },
        body: JSON.stringify(),
    });
    return printError(res);
};

export const getProductByID = async (id) => {
    const res = await fetch(`${baseUrl}${id}`, {
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

export const deleteProduct = async (id) => {
    const res = await fetch(`${baseUrl}${id}`, {
        method: "DELETE",
        headers: {
            authorization: auth,
        },
    });
    return printError(res);
};

const exports = {
    getAllProducts,
    searchProducts,
    addProduct,
    updateProduct,
    getProductByID,
    deleteProduct,
};
export default exports;
