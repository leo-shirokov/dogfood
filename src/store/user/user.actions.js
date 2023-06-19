import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = 'https://api.react-learning.ru'

export const signinUser = createAsyncThunk('user/signin', async (user) => {
	const response = await fetch(`${API_URL}/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	const userData = await response.json()
	return userData
})

export const changeUserInfo = createAsyncThunk(
	'user/changeInfo',
	async ({ groupId, info }, { getState }) => {
		const { token } = getState().user
		const response = await fetch(`${API_URL}/v2/${groupId}/users/me`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify(info),
		})
		return response.json()
	}
)

export const signupUser = createAsyncThunk('user/signup', async (newUser) => {
	await fetch(`${API_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	})
})

export const resetPassword = createAsyncThunk(
	'user/resetPassword',
	async (email) => {
		await fetch(`${API_URL}/forgot-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		})
	}
)

export const changePassword = createAsyncThunk(
	'user/changePassword',
	async ({ newPassword, token }) => {
		await fetch(`${API_URL}/password-reset/${token}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ password: newPassword }),
		})
	}
)

export const changeAvatar = createAsyncThunk(
	'user/changeAvatar',
	async ({ groupId, link }, { getState }) => {
		const { token } = getState().user
		const response = await fetch(
			`${API_URL}/v2/${groupId}/users/me/avatar`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					authorization: token,
				},
				body: JSON.stringify(link),
			}
		)
		return response.json()
	}
)
