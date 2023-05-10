export const baseUrl = "https://api.react-learning.ru/products/";
export const auth =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlZDE0NTMyOTFkNzkwYjNmMzRjZDIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODM4NDc0LCJleHAiOjE3MTMzNzQ0NzR9.GX6DSN6V_eJJ85fLMO_0T5J5KRD2a2pvmtYjHow3yRg";

export const printError = async (res) => {
    if (!res.ok) throw new Error("Ошибка");
    return res.json();
};

export const getAllProducts = async () => {
    try {
        const res = await fetch(baseUrl, {
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const searchProducts = async (path) => {
    try {
        const res = await fetch(`${baseUrl}search?query=${path}`, {
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const addProduct = async (newProduct) => {
    try {
        const res = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: auth,
            },
            body: JSON.stringify(newProduct),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const addLike = async (id) => {
    try {
        const res = await fetch(`${baseUrl}likes/${id}`, {
            method: "PUT",
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const deleteLike = async (id) => {
    try {
        const res = await fetch(`${baseUrl}likes/${id}`, {
            method: "DELETE",
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const updateProduct = async (id) => {
    try {
        const res = await fetch(`${baseUrl}${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: auth,
            },
            body: JSON.stringify(),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const getProductByID = async (id) => {
    try {
        const res = await fetch(`${baseUrl}${id}`, {
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await fetch(`${baseUrl}${id}`, {
            method: "DELETE",
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const addReviewById = async (id, review) => {
    try {
        const res = await fetch(`${baseUrl}review/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: auth,
            },
            body: JSON.stringify({ id, review }),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const deleteReviewById = async (id, prodId) => {
    try {
        const res = await fetch(`${baseUrl}review/${id}/${prodId}`, {
            method: "DELETE",
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
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
