import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { addLike, deleteLike, getAllProducts, searchProducts } from '../api'
import ProductsContext from '../context/productsContext'
import { AuthContext } from './AuthProvider'

function ProductsProvider({ children }) {
	// Инициализируем состояния
	const [allProducts, setAllProducts] = useState([])
	const [total, setTotal] = useState(0)
	const [searchItem, setSearchItem] = useState('')
	const { user } = useContext(AuthContext)
	const [loading, setLoading] = useState(false)
	const [render, setRender] = useState(0)
	const [activePage, setActivePage] = useState(1)
	const [sortMode, setSortMode] = useState('all')

	// Обрезаем поисковый запрос от пробелов
	const trimmedItem = searchItem.trim()

	// Создаем useEffect, который запускается при изменении состояния trimmedItem и вызывает асинхронную функцию, которая получает все продукты из базы данных если пользователем не активирован поиск, иначе - ищет продукты, соответствующие запросу в строке поиска; полученные данные записываются в state allProducts; общее количество продуктов записывается в состояние total
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
	}, [trimmedItem])

	// Создаем состояние favourites, которое фильтрует все продукты на те, которые были добавлены в избранное зарегистрированным пользователем
	const favourites = allProducts?.filter((prod) =>
		prod.likes.includes(user?.data?._id)
	)

	// Создаем колбэк toggleLike, который принимает объект productData и вызывается при нажатии на кнопку добавления в избранное для продукта;
	// функция изменяет состояние allProducts, чтобы обновить список избранных продуктов; если продукт уже был добавлен в избранное, он удаляется из списка, иначе - добавляется;
	// функция также отправляет запрос на сервер, чтобы изменения были сохранены
	const toggleLike = useCallback(
		async (productData) => {
			const userId = user?.data?._id
			// if (!userId) return
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

	// Кэшируем контекст для оптимизации производительности
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
		// Создаем контекст ProductsContext, в который передаем объект value
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider
