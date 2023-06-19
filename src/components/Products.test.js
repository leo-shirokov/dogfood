import { render, screen } from '@testing-library/react'
import Products from './Products'

describe('Продукты', () => {
	test('отображает список товаров', () => {
		render(<Products />)

		const productList = screen.getByTestId('product-list')
		expect(productList).toBeInTheDocument()

		const products = screen.getAllByTestId('product-item')
		expect(products.length).toBeGreaterThan(0)
	})

	test('не отображает товары, если список пуст', () => {
		render(<Products products={[]} />)

		const productCards = screen.queryAllByTestId('product-item')
		expect(productCards.length).toBe(0)
	})
})
