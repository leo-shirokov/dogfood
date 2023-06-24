import { Paper } from '@mantine/core'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Back from '../../components/Back/Back'
import TwoBanners from '../../components/Banners/TwoBanners'
import useActions from '../../hooks/useActions'
import useCart from '../../hooks/useCart'
import showPriceInRub from '../../utils/currency'
import Carousel from './Carousel'
import CartItem from './CartItem'

function Cart() {
	const { cartItems, totalItems } = useCart()
	const { cleanCart } = useActions()

	const cost = cartItems.reduce((sum, item) => {
		if (item.stock > 0) {
			return (
				sum +
				(item.price - (item.price * item.discount) / 100) *
					item.quantity
			)
		} else {
			return sum
		}
	}, 0) // общая стоимость товаров в корзине с учетом скидки и наличия товара

	const costInEth = (cost * 0.01) / 1000

	function checkout() {
		cleanCart()
		localStorage.removeItem('cart')
	}

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Корзина</h2>

			{cartItems.length ? (
				<>
					{cartItems.map((item) => (
						<CartItem key={item._id} {...item} />
					))}

					<Paper className='w-full p-5' shadow='xs' p='sm'>
						<h2 className='mb-5 text-xl font-semibold'>
							Ваша Корзина
						</h2>
						<div className='mb-3 flex items-center justify-between'>
							<p className='text-md'>Товаров в корзине:</p>
							<p className='text-md font-semibold'>
								{totalItems}
							</p>
						</div>
						<div className='mb-3 flex items-center justify-between'>
							<p className='text-md'>
								Общая стоимость (с учетом скидки):
							</p>
							<p className='text-md font-semibold text-red-700'>
								{showPriceInRub(cost)}
							</p>
						</div>
						<button
							className='rounded-3xl bg-yellow-300 px-4 py-2 text-sm font-semibold shadow-md transition-all duration-200 hover:ring-2'
							onClick={checkout}
							title={`К оплате через кошелек Metamask ${costInEth} ETH`}
						>
							Оформить заказ
						</button>
					</Paper>
					<br />
					<Carousel />
				</>
			) : (
				<>
					<p className='flex justify-center'>Ваша корзина пуста</p>
					<br />
					<p className='flex justify-center text-4xl'>
						{<GiShoppingCart />}
					</p>
					<br />
					<Link
						to='/catalog'
						className='flex justify-center text-xl font-bold text-gray-600 hover:text-gray-800'
					>
						Добавить товары
					</Link>
				</>
			)}

			<TwoBanners banIndex1={2} banIndex2={3} />
		</>
	)
}

export default Cart
