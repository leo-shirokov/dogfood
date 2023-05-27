import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Back from '../../components/Back/Back'
import TwoBanners from '../../components/Banners/TwoBanners'
import { CartContext } from '../../providers/CartProvider'
import showPriceInRub from '../../utils/currency'
import CartItem from './CartItem'

function Cart() {
	const { cartItems } = useContext(CartContext)
	// рассчитываем общую стоимость товаров в корзине
	const cost = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Корзина</h2>

			{cartItems.length ? (
				<>
					{cartItems.map((item) => (
						<CartItem key={item._id} {...item} />
					))}
					<div className='mt-5 flex items-center justify-start gap-x-5'>
						<p className='text-md font-bold'>Итого:</p>
						<p className='text-md font-semibold text-red-700'>
							{showPriceInRub(cost)}
						</p>
					</div>
				</>
			) : (
				<>
					<p>Ваша корзина пуста</p>
					<Link
						to='/catalog'
						className='text-md font-bold text-yellow-400'
					>
						Добавить товары
					</Link>
				</>
			)}

			<TwoBanners banIndex1={0} banIndex2={1} />
			<TwoBanners banIndex1={2} banIndex2={3} />
		</>
	)
}

export default Cart
