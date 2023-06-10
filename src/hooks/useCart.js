import { useMemo } from 'react'
import { useSelector } from 'react-redux'

function useCart() {
	const cartItems = useSelector((state) => state.cart)
	const totalItems = useMemo(
		() => cartItems.reduce((prev, item) => prev + (item?.quantity ?? 1), 0),
		[cartItems]
	) // общее количество товаров в корзине, включая количество одинаковых продуктов
	return { cartItems, totalItems }
}

export default useCart
