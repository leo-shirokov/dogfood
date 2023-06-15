import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../store/cart/cart.slice'
import { searchSlice } from '../store/search/search.slice'
import * as userAsyncThunks from '../store/user/user.actions'
import { userSlice } from '../store/user/user.slice'

const rootActions = {
	...cartSlice.actions,
	...userSlice.actions,
	...searchSlice.actions,
	...userAsyncThunks,
}

function useActions() {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
