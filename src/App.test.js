import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
	test('отображает основные компоненты', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)

		const header = screen.getByTestId('header')
		expect(header).toBeInTheDocument()

		const footer = screen.getByTestId('footer')
		expect(footer).toBeInTheDocument()

		const catalogRoute = screen.getByTestId('catalog')
		expect(catalogRoute).toBeInTheDocument()

		const error404Route = screen.getByTestId('error404')
		expect(error404Route).toBeInTheDocument()
	})
})
