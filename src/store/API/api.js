import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.react-learning.ru/products/'

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlZDE0NTMyOTFkNzkwYjNmMzRjZDIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODM4NDc0LCJleHAiOjE3MTMzNzQ0NzR9.GX6DSN6V_eJJ85fLMO_0T5J5KRD2a2pvmtYjHow3yRg'

export const api = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: {
			authorization: token,
		},
	}),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => '/',
		}),
	}),
})
