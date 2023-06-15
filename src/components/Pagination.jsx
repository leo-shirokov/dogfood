import { Pagination as MantinePagination } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const ITEMS_ON_PAGE = 12

function Pagination({ activePage, setActivePage, totalItems }) {
	const navigate = useNavigate()
	const nav = (num) => {
		navigate(`/?page=${num}`)
		setActivePage(num)
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
