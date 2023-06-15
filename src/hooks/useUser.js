import { useSelector } from 'react-redux'
//import { useMemo } from "react";

function useUser() {
	const user = useSelector((state) => state.user)

	return { user }
}

export default useUser
