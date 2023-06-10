import { useDispatch, useSelector } from 'react-redux'
import { setKeyWord } from '../../store/search/search.slice'

export const Search = () => {
	const dispatch = useDispatch()
	const { keyWord } = useSelector((state) => state.search)

	const onChange = (e) => {
		const searchText = e.target.value
		dispatch(setKeyWord(searchText))
		// setSearchItem(searchText)
		// setActivePage(1)
		// if (searchText === '') {
		// 	setSortMode('all')
		// }
	}
	return (
		<input
			className='h-[2.625rem] w-full rounded-3xl border-solid border-transparent 
            bg-white px-5 py-5 text-base text-gray-900 caret-yellow-300'
			placeholder='Поиск'
			value={keyWord}
			onChange={onChange}
		/>
	)
}
