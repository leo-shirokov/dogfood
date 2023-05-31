import { api } from './api'

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProductById: builder.query({
			query: (id) => ({
				url: `/${id}`,
				method: 'GET',
				// headers: {
				// 	authorization: ''
				// },
			}),
		}),
	}),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi
