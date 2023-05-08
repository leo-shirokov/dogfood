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

export const addReviewById = async (id, review) => {
    const res = await fetch(`${baseUrl}review/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: auth,
        },
        body: JSON.stringify(id, review),
    });
    return printError(res);
};

export const deleteReviewById = async (id, prodId) => {
    const res = await fetch(`${baseUrl}review/${id}/${prodId}`, {
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
