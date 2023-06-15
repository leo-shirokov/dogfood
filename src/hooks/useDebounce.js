import { useEffect, useState } from 'react'

const useDebounce = (action) => {
	const [temp, setTemp] = useState()
	useEffect(() => {
		const timeout = setTimeout(() => {
			action(temp)
		}, 600)
		return () => clearTimeout(timeout)
	}, [action, temp])

	return [temp, setTemp]
}
export default useDebounce
