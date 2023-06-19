import { createSlice } from '@reduxjs/toolkit'
import {
	clearLocalStorage,
	getDefaultOrLocalStorage,
	setLocalStorage,
} from '../../utils/localStorage'

const initialState = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState: getDefaultOrLocalStorage(initialState, 'cart'),
	reducers: {
		addToCart: (state, { payload }) => {
			const { product, quantity = 1, replace = false } = payload
			const cartItem = state.find((el) => el._id === product._id)
			if (cartItem) {
				cartItem.quantity = replace
					? quantity
					: cartItem.quantity + quantity
			} else {
				state.push({ ...product, quantity })
			}
			setLocalStorage([...state], 'cart')
		},
		removeItemFromCart: (state, { payload }) => {
			const productId = payload
			const index = state.findIndex((item) => item._id === productId)
			state.splice(index, 1)
			setLocalStorage([...state], 'cart')
		},
		cleanCart: (state) => {
			state.length = 0
			clearLocalStorage('cart')
		},
	},
})

export const { addToCart, removeItemFromCart, cleanCart } = cartSlice.actions

export default cartSlice.reducer
