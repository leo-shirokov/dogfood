import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './cart/cart.slice'
import { productsApi } from './products/products.api'
import userReducers from './user/user.slice'

export const store = configureStore({
	reducer: {
		user: userReducers,
		cart: cartReducers,
		// RTK query
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
})
