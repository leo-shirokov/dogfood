import { fireEvent, render, screen } from '@testing-library/react'
import { Search } from './Search'

test('находит товар по запросу', () => {
	render(<Search />)

	const searchInput = screen.getByTestId('search-input')
	fireEvent.change(searchInput, { target: { value: 'желудки' } })

	const products = screen.getAllByTestId('product-item')
	expect(products.length).toBeGreaterThan(0)
})
