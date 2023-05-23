import { useContext } from 'react'
import Back from '../../components/Back/Back'
import Pagination from '../../components/Pagination'
import Products from '../../components/Products'
import productsContext from '../../context/productsContext'
import usePagination from '../../hooks/usePagination'
import useTop from '../../hooks/useTop'

function Catalog() {
	useTop()

	const { allProducts } = useContext(productsContext)
	const products = usePagination(allProducts)

	return (
		<>
			<Back />
			<Products products={products} />
			<Pagination />
		</>
	)
}

export default Catalog
