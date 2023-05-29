import { NumberInput } from '@mantine/core'
import { useContext } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { CartContext } from '../../providers/CartProvider'
import showPriceInRub from '../../utils/currency'

function CartItem(prod) {
	const { removeItemFromCart, addItemToCart } = useContext(CartContext)

	return (
		<div className='mb-5 flex items-center justify-start gap-x-10 border-b py-5'>
			<div className='basis-1/5'>
				<img className='w-20' src={prod.pictures} alt='product' />
			</div>
			<div className='basis-2/5'>
				<Link to={`/product/${prod._id}`}>
					<p className='text-md mb-3 font-semibold md:text-sm md:font-normal'>
						{prod.name}
					</p>
				</Link>
				{prod.discount > 0 ? (
					<div className='relative'>
						<p className='absolute bottom-4 text-[.6875rem] font-normal text-black line-through'>
							{showPriceInRub(prod.price)}
						</p>
						<h3 className='text-sm font-bold text-red-600'>
							{showPriceInRub(
								prod.price - (prod.price * prod.discount) / 100
							)}
						</h3>
					</div>
				) : (
					<div className=''>
						<h3 className='text-sm font-bold'>
							{showPriceInRub(prod.price)}
						</h3>
					</div>
				)}
			</div>
			<div className='w-basis-1/5'>
				<NumberInput
					className='mb-3 w-20'
					value={prod?.quantity ?? 0}
					type='number'
					placeholder='1'
					radius='xl'
					size='xs'
					onChange={(value) => addItemToCart(prod, value, true)}
					min={1}
					max={99}
				/>
			</div>
			<div className='basis-1/5'>
				<p
					className='text-md cursor-pointer'
					onClick={() => removeItemFromCart(prod._id)}
				>
					{<RiDeleteBin5Line />}
				</p>
			</div>
		</div>
	)
}

export default CartItem
