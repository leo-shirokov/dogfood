export const baseUrl = "https://api.react-learning.ru/products/";
export const regUrl = "https://api.react-learning.ru/";
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

export const addReviewById = async (id, review, rating) => {
    try {
        const res = await fetch(`${baseUrl}review/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: auth,
            },
            body: JSON.stringify({ text: review, rating: rating }),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

export const deleteReviewById = async (prodId, reviewId) => {
    try {
        const res = await fetch(`${baseUrl}review/${prodId}/${reviewId}`, {
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

export const getReviewById = async (prodId) => {
    try {
        const res = await fetch(`${baseUrl}review/${prodId}`, {
            headers: {
                authorization: auth,
            },
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

// регистрация пользователей
export const signupUser = async (newUser) => {
    try {
        const res = await fetch(`${regUrl}signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: auth,
            },
            body: JSON.stringify(newUser),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

// авторизация пользователей
export const signinUser = async (user) => {
    try {
        const res = await fetch(`${regUrl}signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: auth,
            },
            body: JSON.stringify(user),
        });
        return printError(res);
    } catch (error) {
        console.error(error);
    }
};

// получение информации о пользователе
export const getUserInfo = async (groupId) => {
    try {
        const res = await fetch(`${regUrl}v2/${groupId}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
    addReviewById,
    deleteReviewById,
    getReviewById,
    addLike,
    deleteLike,
    signupUser,
    signinUser,
    getUserInfo,
};
export default exports;
