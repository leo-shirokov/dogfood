export function sort(products = [], sortMode = '') {
	const allProducts = products.slice() // copy array
	switch (sortMode) {
		case 'most-popular':
			return allProducts.sort((a, b) => b.likes.length - a.likes.length)
		case 'newest':
			return allProducts.sort(
				(a, b) =>
					new Date(b.created_at).getTime() -
					new Date(a.created_at).getTime()
			)
		case 'cheapest':
			return allProducts.sort((a, b) => a.price - b.price)
		case 'most-expensive':
			return allProducts.sort((a, b) => b.price - a.price)
		case 'highest-rated':
			return allProducts.sort((a, b) => {
				const raitingA = a.reviews.reduce(
					(prev, el) => (prev + el.rating) / a.reviews.length,
					0
				)
				const raitingB = b.reviews.reduce(
					(prev, el) => (prev + el.rating) / b.reviews.length,
					0
				)
				return raitingA - raitingB
			})
		case 'discounted':
			return allProducts.sort((a, b) => b.discount - a.discount)
		default:
			return [...allProducts]
	}
}

export function paginate(products = [], page = 1) {
	const itemsPerPage = 12
	const firstPageIndex = (page - 1) * itemsPerPage
	const lastPageIndex = firstPageIndex + itemsPerPage
	return products.slice(firstPageIndex, lastPageIndex)
}
