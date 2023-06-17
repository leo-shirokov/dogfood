import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
	const [searchText, setSearchText] = useState('')
	const navigate = useNavigate()
	// debounce
	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate(`/?page=1${searchText ? `&search=${searchText}` : ''}`)
		}, 1000)
		return () => clearTimeout(timeout)
	}, [navigate, searchText])

	return (
		<input
			className='h-[2.625rem] w-full rounded-3xl border-solid border-transparent 
            bg-white px-5 py-5 text-base text-gray-900 caret-yellow-300'
			placeholder='Поиск'
			value={searchText}
			onChange={(e) => setSearchText(e.target.value)}
		/>
	)
}
