import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<BrowserRouter>
				<MantineProvider withGlobalStyles withNormalizeCSS>
					<App />
				</MantineProvider>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>
)
