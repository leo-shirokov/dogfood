import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]) // все товары, которые сейчас в корзине
	const [showAlert, setShowAlert] = useState('') // сообщение после добавления в корзину

	// общее количество товаров в корзине, включая количество одинаковых продуктов
	const totalItems = useMemo(
		() => cartItems.reduce((prev, item) => prev + (item?.quantity ?? 1), 0),
		[cartItems]
	)

	// Читаем корзину из local storage один раз при загрузке
	useEffect(() => {
		let localStorageItems = []
		// Оборачиваем в try-catch потому что JSON.parse может не сработать
		try {
			const items = JSON.parse(localStorage.getItem('cart'))
			if (Array.isArray(items)) localStorageItems = items
		} catch (error) {}
		setCartItems(localStorageItems)
	}, [])

	// Записываем корзину в local storage
	const saveCart = useCallback((cart) => {
		if (!Array.isArray(cart)) return
		const localStorageItems = JSON.stringify(cart)
		localStorage.setItem('cart', localStorageItems)
	}, [])

	// функция добавления продукта в корзину
	const append = useCallback(
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
			saveCart(cartCopy)
			setCartItems(cartCopy)
			setShowAlert(`${product.name} добавлен в корзину`)
		},
		[cartItems, saveCart]
	)

	// функция удаления продукта из корзины
	const remove = useCallback(
		(id) => {
			const newCart = cartItems.filter((item) => item._id !== id)
			saveCart(newCart)
			setCartItems(newCart)
		},
		[cartItems, saveCart]
	)

	const hideAlert = () => setShowAlert(null)

	const value = useMemo(
		() => ({
			cartItems,
			append,
			remove,
			showAlert,
			hideAlert,
			totalItems,
		}),
		[append, cartItems, remove, showAlert, totalItems]
	)

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
