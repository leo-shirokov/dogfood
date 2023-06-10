import { createSlice } from '@reduxjs/toolkit'
import { defaultUser } from './defaultUser'
import {
	changeAvatar,
	changePassword,
	changeUserInfo,
	getUserInfo,
	resetPassword,
	signinUser,
	signupUser,
} from './user.actions'

export const userSlice = createSlice({
	name: 'user',
	initialState: defaultUser,
	reducers: {
		logoutUser: (state) => {
			state.data = defaultUser.data
			state.token = defaultUser.token
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signupUser.fulfilled, (state, { payload }) => {
			state.data = payload.data
			state.token = payload.token
		})
		builder.addCase(signinUser.fulfilled, (state, { payload }) => {
			state.data = payload.data
			state.token = payload.token
		})
		builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
			state.data = payload
		})
		builder.addCase(changeAvatar.fulfilled, (state, { payload }) => {
			state.data = payload
		})
		builder.addCase(changePassword.fulfilled, (state, { payload }) => {
			state.data = payload
		})
		builder.addCase(changeUserInfo.fulfilled, (state, { payload }) => {
			state.data = payload
		})
		builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
			state.data = payload
		})
	},
})

export default userSlice.reducer

export const { logoutUser } = userSlice.actions
