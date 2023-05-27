import { NativeSelect } from '@mantine/core'
import { useCallback, useContext } from 'react'
import TwoBanners from '../../components/Banners/TwoBanners'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination'
import Products from '../../components/Products'
import productsContext from '../../context/productsContext'
import usePagination from '../../hooks/usePagination'
import { CartContext } from '../../providers/CartProvider'
import sortOptions from '../../utils/sort'
import ShowAlert from '../Cart/ShowAlert'

function Catalog() {
	const { loading, allProducts, searchItem, sortMode, setSortMode } =
		useContext(productsContext)
	const { showAlert } = useContext(CartContext)

	// определяем варианты и функцию сортировки в зависимости от этого варианта
	const sortType = sortOptions
	const sort = useCallback(() => {
		let sortedProducts
		switch (sortMode) {
			case 'most-popular':
				sortedProducts = allProducts.sort(
					(a, b) => b.likes.length - a.likes.length
				)
				break
			case 'newest':
				sortedProducts = allProducts.sort(
					(a, b) =>
						new Date(b.created_at).getTime() -
						new Date(a.created_at).getTime()
				)
				break
			case 'cheapest':
				sortedProducts = allProducts.sort((a, b) => a.price - b.price)
				break
			case 'most-expensive':
				sortedProducts = allProducts.sort((a, b) => b.price - a.price)
				break
			case 'highest-rated':
				sortedProducts = allProducts.sort((a, b) => {
					const raitingA = a.reviews.reduce(
						(prev, el) => (prev + el.rating) / a.reviews.length,
						0
					)
					const raitingB = b.reviews.reduce(
						(prev, el) => (prev + el.rating) / b.reviews.length,
						0
					)
					return raitingA - raitingB
				})
				break
			case 'discounted':
				sortedProducts = allProducts.sort(
					(a, b) => b.discount - a.discount
				)
				break
			default:
				sortedProducts = allProducts.sort((a, b) => a.order - b.order)
				break
		}
		return sortedProducts
	}, [allProducts, sortMode])

	const paginatedProds = usePagination(sort())

	return (
		<div className='relative'>
			{showAlert && <ShowAlert />}
			{loading ? (
				<Loader />
			) : paginatedProds.length ? (
				<>
					{searchItem?.trim() && (
						<p className='mb-5 text-lg text-gray-700'>
							По запросу{' '}
							<span className='font-bold'>{searchItem}</span>{' '}
							найдено {paginatedProds.length} товаров
						</p>
					)}

					{/* сортировка при поиске товаров */}
					{searchItem?.trim() && (
						<div className='mb-10 flex items-center justify-start gap-x-4 rounded-md border border-gray-50 px-4 py-1 shadow-md md:hidden'>
							{sortType.map((item) => (
								<span
									key={item.group}
									onClick={() => setSortMode(item.group)}
									className='text-md cursor-pointer whitespace-nowrap text-gray-500 hover:text-gray-700 md:text-sm'
								>
									{item.title}
								</span>
							))}
						</div>
					)}

					{/* сортировка через select при поиске товаров на мобильном устройстве */}
					{searchItem?.trim() && (
						<div className='my-4 flex items-center justify-center 2xl:hidden xl:hidden lg:hidden md:block'>
							<NativeSelect
								data={sortType.map((item) => ({
									label: item.title,
									value: item.group,
								}))}
								onChange={(event) =>
									setSortMode(event.currentTarget.value)
								}
							/>
						</div>
					)}

					<Products products={paginatedProds} />
					<Pagination />
				</>
			) : (
				<p>Не удалось загрузить список товаров</p>
			)}

			<TwoBanners banIndex1={2} banIndex2={3} />
		</div>
	)
}

export default Catalog
