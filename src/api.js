// доступ к RESTful API и взаимодействие с ним
export const baseUrl = 'https://api.react-learning.ru/products/';
export const regUrl = 'https://api.react-learning.ru/';

// Константа аутентификации — JSON web token (JWT), который отправляется в качестве заголовка аутентификации с каждым запросом API
export const auth =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlZDE0NTMyOTFkNzkwYjNmMzRjZDIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODM4NDc0LCJleHAiOjE3MTMzNzQ0NzR9.GX6DSN6V_eJJ85fLMO_0T5J5KRD2a2pvmtYjHow3yRg';

// служебная функция, проверяющая имеет ли объект ответа из API код состояния ошибки
export const printError = async (res) => {
	if (!res.ok) throw new Error('Ошибка');
	return res.json();
};

// отправляет запрос GET на baseUrl для получения всех продуктов с сервера
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

// отправляет запрос GET на baseUrl для поиска продуктов, соответствующих заданному поисковому запросу
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

// отправляет запрос POST на baseUrl, чтобы добавить новый продукт на сервер
export const addProduct = async (newProduct) => {
	try {
		const res = await fetch(baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: auth,
			},
			body: JSON.stringify(newProduct),
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос PUT на baseUrl, чтобы добавить лайк к продукту с заданным идентификатором
export const addLike = async (id) => {
	try {
		const res = await fetch(`${baseUrl}likes/${id}`, {
			method: 'PUT',
			headers: {
				authorization: auth,
			},
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос DELETE на baseUrl для удаления лайка с товара с заданным ID
export const deleteLike = async (id) => {
	try {
		const res = await fetch(`${baseUrl}likes/${id}`, {
			method: 'DELETE',
			headers: {
				authorization: auth,
			},
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос PUT на baseUrl для обновления продукта с заданным идентификатором
export const updateProduct = async (id) => {
	try {
		const res = await fetch(`${baseUrl}${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: auth,
			},
			body: JSON.stringify(),
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос GET на baseUrl для получения продукта с заданным идентификатором
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

// отправляет запрос DELETE на baseUrl для удаления продукта с заданным идентификатором
export const deleteProduct = async (id) => {
	try {
		const res = await fetch(`${baseUrl}${id}`, {
			method: 'DELETE',
			headers: {
				authorization: auth,
			},
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет POST-запрос на baseUrl, чтобы добавить отзыв к продукту с заданным идентификатором
export const addReviewById = async (id, review, rating) => {
	try {
		const res = await fetch(`${baseUrl}review/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: auth,
			},
			body: JSON.stringify({ text: review, rating: rating }),
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос DELETE на baseUrl для удаления отзыва с заданным идентификатором для продукта с заданным идентификатором
export const deleteReviewById = async (prodId, reviewId) => {
	try {
		const res = await fetch(`${baseUrl}review/${prodId}/${reviewId}`, {
			method: 'DELETE',
			headers: {
				authorization: auth,
			},
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос GET на baseUrl, чтобы получить все отзывы о продукте с заданным идентификатором
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

// отправляет запрос POST в regUrl для регистрации нового пользователя с заданными данными
export const signupUser = async (newUser) => {
	try {
		const res = await fetch(`${regUrl}signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос POST в regUrl для аутентификации пользователя с заданными учетными данными
export const signinUser = async (user) => {
	try {
		const res = await fetch(`${regUrl}signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: auth,
			},
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос POST в regUrl для сбрасывания (забытого) пароля
export const resetPassword = async (email) => {
	try {
		const res = await fetch(`${regUrl}forgot-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		});
		return printError(res);
	} catch (error) {
		console.error(error);
	}
};

// отправляет запрос PATCH в regUrl для изменения пароля с подтверждением токена
export const changePassword = async (token, newPassword) => {
	try {
		const res = await fetch(`${regUrl}password-reset/${token}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token, newPassword),
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
	resetPassword,
	changePassword,
};
export default exports;
