import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]) // все товары, которые сейчас в корзине
	const [showAlert, setShowAlert] = useState('') // сообщение после добавления в корзину

	const totalItems = useMemo(
		() => cartItems.reduce((prev, item) => prev + (item?.quantity ?? 1), 0),
		[cartItems]
	) // общее количество товаров в корзине, включая количество одинаковых продуктов

	useEffect(() => {
		let localStorageItems = []
		try {
			const items = JSON.parse(localStorage.getItem('cart'))
			if (Array.isArray(items)) localStorageItems = items
		} catch (error) {}
		setCartItems(localStorageItems)
	}, [])

	const saveCartToLocalStorage = useCallback((cart) => {
		if (!Array.isArray(cart)) return
		const localStorageItems = JSON.stringify(cart)
		localStorage.setItem('cart', localStorageItems)
	}, [])

	const addItemToCart = useCallback(
		// если указан параметр replace = true, то quantity будет перезаписано на новое, а если false то старое и новое количества суммируются
		(product, quantity = 1, replace = false) => {
			// Проверяем, нет ли уже такого товара в корзине
			const cartCopy = [...cartItems]
			const cartItem = cartCopy.find((el) => el._id === product._id)
			if (cartItem) {
				cartItem.quantity = replace
					? quantity
					: cartItem.quantity + quantity
			} else {
				cartCopy.push({ ...product, quantity })
			}
			saveCartToLocalStorage(cartCopy)
			setCartItems(cartCopy)
			setShowAlert(`${product.name} добавлен в корзину`)
		},
		[cartItems, saveCartToLocalStorage]
	)

	const removeItemFromCart = useCallback(
		(id) => {
			const newCart = cartItems.filter((item) => item._id !== id)
			saveCartToLocalStorage(newCart)
			setCartItems(newCart)
		},
		[cartItems, saveCartToLocalStorage]
	)

	const cleanCart = useCallback(() => {
		localStorage.removeItem('cart')
		setCartItems([])
	}, [])

	const hideAlert = () => setShowAlert(null)

	const value = useMemo(
		() => ({
			cartItems,
			addItemToCart,
			removeItemFromCart,
			showAlert,
			hideAlert,
			totalItems,
			cleanCart,
		}),
		[
			addItemToCart,
			cartItems,
			cleanCart,
			removeItemFromCart,
			showAlert,
			totalItems,
		]
	)

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
