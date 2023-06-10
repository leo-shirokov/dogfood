import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	keyWord: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setKeyWord: (state, { payload }) => {
			state.keyWord = payload
		},
	},
})

export const { setKeyWord } = searchSlice.actions
export default searchSlice.reducer
