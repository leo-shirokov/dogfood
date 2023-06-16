import { useSelector } from 'react-redux'

function useUser() {
	const user = useSelector((state) => state.user)

	return { user }
}

export default useUser
