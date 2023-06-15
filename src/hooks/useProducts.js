import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../store/products/products.api'

function useProducts() {
	const { data: products } = useGetAllProductsQuery()
	const userId = useSelector((state) => state?.user?.data?._id)

	const favourites = useMemo(() => {
		return (
			products?.filter((product) => {
				return product?.likes?.includes(userId)
			}) ?? []
		)
	}, [products, userId])

	return { products, favourites }
}

export default useProducts
