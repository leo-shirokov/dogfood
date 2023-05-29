import { Paper } from '@mantine/core'
import { ethers } from 'ethers'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Back from '../../components/Back/Back'
import TwoBanners from '../../components/Banners/TwoBanners'
import { CartContext } from '../../providers/CartProvider'
import showPriceInRub from '../../utils/currency'
import CartItem from './CartItem'

function Cart() {
	const { cartItems, setCartItems, totalItems } = useContext(CartContext)

	const cost = cartItems.reduce(
		(sum, item) =>
			sum +
			(item.price - (item.price * item.discount) / 100) * item.quantity,
		0
	) // общая стоимость товаров в корзине с учетом скидки

	const costInEth = (cost * 0.01) / 1000

	function ethToWei(eth) {
		const wei = ethers.utils.parseEther(eth.toString())
		return wei
	}
	const weiAmount = ethToWei(costInEth)

	const payViaMetamask = async () => {
		try {
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			await provider.send('eth_requestAccounts', [])
			const signer = provider.getSigner()
			await signer.getAddress()
			const res = await signer.sendTransaction({
				to: '0x424F5da8978D9E6A917350B55698d6a4079deD38',
				value: weiAmount,
			})
			console.log(res)
			setCartItems([])
			localStorage.removeItem('cart')
		} catch (error) {
			console.error(error)
		}
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
							onClick={payViaMetamask}
							title={`К оплате через кошелек Metamask ${costInEth} ETH`}
						>
							Оформить заказ
						</button>
					</Paper>
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
