// доступ к RESTful API и взаимодействие с ним
import printError from './utils/error'
export const baseUrl = 'https://api.react-learning.ru/products/'
export const regUrl = 'https://api.react-learning.ru/'

// отправляет запрос GET на baseUrl для получения всех продуктов с сервера
export const getAllProducts = async (token) => {
	try {
		const res = await fetch(baseUrl, {
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос GET на baseUrl для поиска продуктов, соответствующих заданному поисковому запросу
export const searchProducts = async (token, path) => {
	try {
		const res = await fetch(`${baseUrl}search?query=${path}`, {
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос POST на baseUrl, чтобы добавить новый продукт на сервер
export const addProduct = async (token, newProduct) => {
	try {
		const res = await fetch(baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify(newProduct),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос PUT на baseUrl, чтобы добавить лайк к продукту с заданным идентификатором
export const addLike = async (token, id) => {
	try {
		const res = await fetch(`${baseUrl}likes/${id}`, {
			method: 'PUT',
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос DELETE на baseUrl для удаления лайка с товара с заданным ID
export const deleteLike = async (token, id) => {
	try {
		const res = await fetch(`${baseUrl}likes/${id}`, {
			method: 'DELETE',
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос PUT на baseUrl для обновления продукта с заданным идентификатором
export const updateProduct = async (token, id) => {
	try {
		const res = await fetch(`${baseUrl}${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify(),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос GET на baseUrl для получения продукта с заданным идентификатором
export const getProductByID = async (token, id) => {
	try {
		const res = await fetch(`${baseUrl}${id}`, {
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос DELETE на baseUrl для удаления продукта с заданным идентификатором
export const deleteProduct = async (token, id) => {
	try {
		const res = await fetch(`${baseUrl}${id}`, {
			method: 'DELETE',
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет POST-запрос на baseUrl, чтобы добавить отзыв к продукту с заданным идентификатором
export const addReviewById = async (token, id, review, rating) => {
	try {
		const res = await fetch(`${baseUrl}review/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify({ text: review, rating: rating }),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос DELETE на baseUrl для удаления отзыва с заданным идентификатором для продукта с заданным идентификатором
export const deleteReviewById = async (token, prodId, reviewId) => {
	try {
		const res = await fetch(`${baseUrl}review/${prodId}/${reviewId}`, {
			method: 'DELETE',
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос GET на baseUrl, чтобы получить все отзывы о продукте с заданным идентификатором
export const getReviewById = async (token, prodId) => {
	try {
		const res = await fetch(`${baseUrl}review/${prodId}`, {
			headers: {
				authorization: token,
			},
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос POST в regUrl для регистрации нового пользователя с заданными данными
export const signupUser = async (newUser) => {
	const res = await fetch(`${regUrl}signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	})
	return printError(res)
}

// отправляет запрос POST в regUrl для аутентификации пользователя с заданными учетными данными
export const signinUser = async (user) => {
	try {
		const res = await fetch(`${regUrl}signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос POST в regUrl для сбрасывания (забытого) пароля
export const resetPassword = async (email) => {
	try {
		const res = await fetch(`${regUrl}forgot-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

// отправляет запрос PATCH в regUrl для изменения пароля с подтверждением токена
export const changePassword = async (token, newPassword) => {
	try {
		const res = await fetch(`${regUrl}password-reset/${token}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token, newPassword),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

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
	resetPassword,
	changePassword,
}
export default exports
