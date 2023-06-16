import { NativeSelect } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import TwoBanners from '../../components/Banners/TwoBanners'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination'
import Products from '../../components/Products'
import { useGetAllProductsQuery } from '../../store/products/products.api'
import { paginate, sort, sortOptions } from '../../utils/sort'

function Catalog() {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState('')

	const { keyWord } = useSelector((state) => state.search)
	const { data, isLoading } = useGetAllProductsQuery(keyWord)

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
					{keyWord && (
						<p className='mb-5 text-lg text-gray-700'>
							По запросу{' '}
							<span className='font-bold'>{keyWord}</span> найдено{' '}
							{data.length} товаров
						</p>
					)}

					{/* сортировка при поиске товаров */}
					{keyWord && (
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
					{keyWord && (
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
					<Pagination
						activePage={page}
						setActivePage={setPage}
						totalItems={data.length}
					/>
				</>
			) : (
				<p>Не удалось загрузить список товаров</p>
			)}

			<TwoBanners banIndex1={2} banIndex2={3} />
		</div>
	)
}

export default Catalog
