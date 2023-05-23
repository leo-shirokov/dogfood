// доступ к RESTful API для взаимодействия с пользователем (регистрация, аутентификация, сброс пароля)

import printError from './utils/error'

export const regUrl = 'https://api.react-learning.ru/'

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

// отправляет запрос PATCH для изменения поля about пользователя
export const changeAbout = async (token, groupId, newAbout) => {
	try {
		const res = await fetch(`${regUrl}v2/${groupId}/users/me`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify(newAbout),
		})
		return printError(res)
	} catch (error) {
		console.error(error)
	}
}

const exports = {
	signupUser,
	signinUser,
	resetPassword,
	changePassword,
}
export default exports
