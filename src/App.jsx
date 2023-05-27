import { Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Auth from './screens/Authorization/AuthForm/AuthForm'
import RegForm from './screens/Authorization/RegForm/RegForm'
import ResetForm from './screens/Authorization/ResetForm/ResetForm'
import Cart from './screens/Cart/Cart'
import Catalog from './screens/Catalog/Catalog'
import Contacts from './screens/Contacts/Contacts'
import CreateProduct from './screens/CreateProduct/CreateProduct'
import Faq from './screens/Faq/Faq'
import Favorites from './screens/Favorites/Favorites'
import Feedback from './screens/Feedback/Feedback'
import News from './screens/News/News'
import Payments from './screens/Payments/Payments'
import Product from './screens/Product/Product'
import Profile from './screens/Profile/Profile'
import Promotions from './screens/Promotions/Promotions'
import Reviews from './screens/Reviews/Reviews'

function App() {
	return (
		<div className='mx-auto flex h-full max-w-[90rem] flex-col'>
			<Header />

			<main className='mx-auto w-4/6 flex-initial py-10 lg:w-4/5 md:w-11/12 md:py-8'>
				<>
					<Routes>
						<Route index element={<Catalog />} />
						<Route path='/product/:id' element={<Product />} />
						<Route path='/favorite' element={<Favorites />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/promotions' element={<Promotions />} />
						<Route path='/news' element={<News />} />
						<Route path='/reviews' element={<Reviews />} />
						<Route path='/payments' element={<Payments />} />
						<Route path='/faq' element={<Faq />} />
						<Route path='/feedback' element={<Feedback />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<Error404 />} />
						<Route path='/addproduct' element={<CreateProduct />} />
						<Route path='/profile' element={<Profile />}>
							<Route path='registration' element={<RegForm />} />
							<Route path='auth' element={<Auth />} />
							<Route
								path='reset-password'
								element={<ResetForm />}
							/>
						</Route>
					</Routes>
				</>
			</main>

			<Footer />
		</div>
	)
}

export default App
