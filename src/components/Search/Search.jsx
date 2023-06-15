import useActions from '../../hooks/useActions'
import useDebounce from '../../hooks/useDebounce'

export const Search = () => {
	const { setKeyWord } = useActions()
	const [temp, setTemp] = useDebounce(setKeyWord)

	return (
		<input
			className='h-[2.625rem] w-full rounded-3xl border-solid border-transparent 
            bg-white px-5 py-5 text-base text-gray-900 caret-yellow-300'
			placeholder='Поиск'
			value={temp}
			onChange={(e) => setTemp(e.target.value)}
		/>
	)
}
