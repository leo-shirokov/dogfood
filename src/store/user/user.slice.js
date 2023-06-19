import { createSlice } from '@reduxjs/toolkit'
import {
	clearLocalStorage,
	getDefaultOrLocalStorage,
	setLocalStorage,
} from '../../utils/localStorage'
import { defaultUser } from './defaultUser'
import {
	changeAvatar,
	changePassword,
	changeUserInfo,
	resetPassword,
	signinUser,
	signupUser,
} from './user.actions'

export const userSlice = createSlice({
	name: 'user',
	initialState: getDefaultOrLocalStorage(defaultUser, 'user'),
	reducers: {
		logoutUser: (state) => {
			state.data = defaultUser.data
			state.token = defaultUser.token
			clearLocalStorage('user')
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signinUser.fulfilled, (state, { payload }) => {
			state.data = payload.data
			state.token = payload.token
			setLocalStorage(payload, 'user')
		})
		builder.addCase(changeUserInfo.fulfilled, (state, { payload }) => {
			state.data = payload
		})
		builder.addCase(signupUser.fulfilled, (state, { payload }) => {})
		builder.addCase(resetPassword.fulfilled, (state, { payload }) => {})
		builder.addCase(changePassword.fulfilled, (state, { payload }) => {})
		builder.addCase(changeAvatar.fulfilled, (state, { payload }) => {
			state.data = payload
		})
	},
})

export default userSlice.reducer

export const { logoutUser } = userSlice.actions
