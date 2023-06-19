import { NativeSelect } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import TwoBanners from '../../components/Banners/TwoBanners'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination'
import Products from '../../components/Products'
import { useGetAllProductsQuery } from '../../store/products/products.api'
import { paginate, sort, sortOptions } from '../../utils/sort'

function Catalog() {
	const location = useLocation()
	const [searchParams] = useSearchParams()
	const page = Number(searchParams.get('page')) || 1
	const query = searchParams.get('search')
	const [sortType, setSortType] = useState('')
	const { data, isLoading } = useGetAllProductsQuery(query)

	const products = useMemo(() => {
		if (!data) return []
		return paginate(sort(data, sortType), page)
	}, [data, sortType, page])

	return (
		<div className='relative'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				<>
					{query && (
						<p className='mb-5 text-lg text-gray-700'>
							По запросу{' '}
							<span className='font-bold'>{query}</span> найдено{' '}
							{data.length} товаров
						</p>
					)}

					{/* сортировка при поиске товаров */}
					{location.pathname === '/catalog' && (
						<div className='mb-10 flex items-center justify-start gap-x-4 rounded-md border border-gray-50 px-4 py-1 shadow-md md:hidden'>
							{sortOptions.map((item) => (
								<span
									key={item.group}
									onClick={() => setSortType(item.group)}
									className='text-md cursor-pointer whitespace-nowrap text-gray-500 hover:text-gray-700 md:text-sm'
								>
									{item.title}
								</span>
							))}
						</div>
					)}

					{/* сортировка через select при поиске товаров на мобильном устройстве */}
					{query && (
						<div className='my-4 flex items-center justify-center 2xl:hidden xl:hidden lg:hidden md:block'>
							<NativeSelect
								data={sortOptions.map((item) => ({
									label: item.title,
									value: item.group,
								}))}
								onChange={(event) =>
									setSortType(event.currentTarget.value)
								}
							/>
						</div>
					)}

					<Products products={products} />
					<Pagination totalItems={data.length} />
				</>
			) : (
				<p>Не удалось загрузить список товаров</p>
			)}

			<TwoBanners banIndex1={2} banIndex2={3} />
		</div>
	)
}

export default Catalog
