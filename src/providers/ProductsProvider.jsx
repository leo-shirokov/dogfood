import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { addLike, deleteLike, getAllProducts, searchProducts } from '../api'
import ProductsContext from '../context/productsContext'
import { AuthContext } from './AuthProvider'

function ProductsProvider({ children }) {
	const [allProducts, setAllProducts] = useState([])
	const [total, setTotal] = useState(0)
	const [searchItem, setSearchItem] = useState('')
	const { user } = useContext(AuthContext)
	const [loading, setLoading] = useState(false)
	const [render, setRender] = useState(0)
	const [activePage, setActivePage] = useState(1)
	const [sortMode, setSortMode] = useState('all')

	const trimmedItem = searchItem.trim()

	// Создаем useEffect, который получает все продукты, если пользователем не активирован поиск, иначе - ищет продукты, соответствующие запросу
	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				let products
				if (trimmedItem) {
					const data = await searchProducts(user.token, trimmedItem)
					products = data
					setTotal(products?.length ?? 0)
				} else {
					const data = await getAllProducts(user.token)
					products = data?.products
					setTotal(data.total)
				}
				const orderedProducts =
					products?.map((p, i) => ({
						...p,
						order: i,
					})) ?? []
				setAllProducts(orderedProducts)
			} catch (error) {
				console.error(error.message)
			} finally {
				setLoading(false)
			}
		})()
	}, [trimmedItem, user.token])

	const favourites = allProducts?.filter((prod) =>
		prod.likes.includes(user?.data?._id)
	)

	// Обновляем избранное: если продукт уже был добавлен, он удаляется из списка, иначе - добавляется
	const toggleLike = useCallback(
		async (productData) => {
			const userId = user?.data?._id

			setRender((ren) => ren + 1)
			const isLiked = productData?.likes?.includes(userId)
			setAllProducts((products) => {
				const product = products.find((p) => p._id === productData._id)
				if (isLiked) {
					const likesIndex = product.likes.indexOf(userId)
					product.likes.splice(likesIndex, 1)
				} else {
					product.likes.push(userId)
				}
				return products
			})
			if (isLiked) {
				await deleteLike(user.token, productData._id)
			} else {
				await addLike(user.token, productData._id)
			}
		},
		[user]
	)

	const value = useMemo(
		() => ({
			allProducts,
			setAllProducts,
			total,
			loading,
			searchItem,
			setSearchItem,
			render,
			setRender,
			favourites,
			activePage,
			setActivePage,
			sortMode,
			setSortMode,
			toggleLike,
		}),
		[
			allProducts,
			loading,
			total,
			searchItem,
			render,
			favourites,
			activePage,
			sortMode,
			toggleLike,
		]
	)

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider
