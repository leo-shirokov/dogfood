import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import CartProvider from './providers/CartProvider'
import ProductsProvider from './providers/ProductsProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProductsProvider>
					<CartProvider>
						<MantineProvider withGlobalStyles withNormalizeCSS>
							<App />
						</MantineProvider>
					</CartProvider>
				</ProductsProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
)
