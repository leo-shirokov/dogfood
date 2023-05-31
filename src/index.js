import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import CartProvider from './providers/CartProvider'
import ProductsProvider from './providers/ProductsProvider'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
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
		</Provider>
	</React.StrictMode>
)
