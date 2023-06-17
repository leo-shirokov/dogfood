import { Pagination as MantinePagination } from '@mantine/core'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ITEMS_ON_PAGE = 12

function Pagination({ totalItems }) {
	const [searchParams] = useSearchParams()
	const activePage = Number(searchParams.get('page')) || 1
	const queryStr = searchParams.get('search')
	const navigate = useNavigate()
	const nav = (num) => {
		navigate(`/?page=${num}${queryStr ? `&search=${queryStr}` : ''}`)
	}
	const totalPages = Math.floor(totalItems / ITEMS_ON_PAGE)

	return (
		<div className='my-10 flex justify-center'>
			<MantinePagination
				value={activePage}
				onChange={nav}
				total={totalPages}
				color='yellow'
			/>
		</div>
	)
}

export default Pagination
