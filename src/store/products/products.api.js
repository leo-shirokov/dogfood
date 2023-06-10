import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_URL = 'https://api.react-learning.ru/products'

export const productsApi = createApi({
	reducerPath: 'products',
	tagTypes: ['Products', 'Product', 'Reviews'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const state = getState()
			const token = state.user.token
			headers.set('authorization', `Bearer ${token}`)
		},
	}),
	endpoints: (builder) => ({
		// отправляет запрос GET на baseUrl для получения всех продуктов с сервера. Если указан keyWord, то запрашивает поиск по ключевому слову
		getAllProducts: builder.query({
			query: (keyWord) => {
				const url = keyWord
					? `/search?query=${encodeURIComponent(keyWord)}`
					: '/'
				return {
					url,
					method: 'GET',
				}
			},
			providesTags: () => [
				{
					type: 'Products',
				},
			],
			transformResponse: (response) => {
				if ('products' in response) return response.products
				return response
			},
		}),
		// отправляет запрос GET на baseUrl для получения продукта с заданным идентификатором
		getProductById: builder.query({
			query: ({ id }) => ({
				url: `/${id}`,
				method: 'GET',
			}),
			providesTags: () => [{ type: 'Product' }],
		}),
		// ставит или снимает like с продукта в зависимости от параметра isLiked
		setLike: builder.mutation({
			query: ({ id, isLiked }) => {
				return {
					url: `/likes/${id}`,
					method: isLiked ? 'PUT' : 'DELETE',
				}
			},
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет запрос POST на baseUrl, чтобы добавить новый продукт на сервер
		addProduct: builder.mutation({
			query: (newProduct) => ({
				url: '/',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newProduct),
			}),
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет запрос PUT на baseUrl для обновления продукта с заданным идентификатором
		updateProduct: builder.mutation({
			query: ({ product, id }) => ({
				url: `/${id}`,
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			}),
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет запрос DELETE на baseUrl для удаления продукта с заданным идентификатором
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет POST-запрос на baseUrl, чтобы добавить отзыв к продукту с заданным идентификатором
		addReviewById: builder.mutation({
			query: ({ id, review, rating }) => {
				return {
					url: `/review/${id}`,
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ text: review, rating: rating }),
				}
			},
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет запрос DELETE на baseUrl для удаления отзыва с заданным идентификатором для продукта с заданным идентификатором
		deleteReviewById: builder.mutation({
			query: ({ id, reviewId }) => ({
				url: `/review/${id}/${reviewId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Product', 'Products'],
		}),
		// отправляет запрос GET на baseUrl, чтобы получить все отзывы о продукте с заданным идентификатором
		getReviewById: builder.query({
			query: ({ id }) => {
				return {
					url: `/review/${id}`,
					method: 'GET',
				}
			},
			providesTags: ['Reviews'],
		}),
	}),
})

export const {
	// query
	useGetAllProductsQuery,
	useGetProductByIdQuery,
	useGetReviewByIdQuery,
	// mutation
	useSetLikeMutation,
	useAddProductMutation,
	useUpdateProductMutation,
	useAddReviewByIdMutation,
	useDeleteReviewByIdMutation,
} = productsApi
