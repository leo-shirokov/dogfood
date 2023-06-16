import { NumberInput } from '@mantine/core'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import showPriceInRub from '../../utils/currency'

function CartItem(product) {
	const { addToCart, removeItemFromCart } = useActions()

	return (
		<div className='mb-5 flex items-center justify-start gap-x-10 border-b py-5'>
			<div className='basis-1/5'>
				<img className='w-20' src={product.pictures} alt='product' />
			</div>
			<div className='basis-2/5'>
				<Link to={`/product/${product._id}`}>
					<p className='text-md mb-3 font-semibold md:text-sm md:font-normal'>
						{product.name}
					</p>
				</Link>
				{product.discount > 0 ? (
					<div className='relative'>
						<p className='absolute bottom-4 text-[.6875rem] font-normal text-black line-through'>
							{showPriceInRub(product.price)}
						</p>
						<h3 className='text-sm font-bold text-red-600'>
							{showPriceInRub(
								product.price -
									(product.price * product.discount) / 100
							)}
						</h3>
					</div>
				) : (
					<div className=''>
						<h3 className='text-xs font-bold'>
							{showPriceInRub(product.price)}
						</h3>
					</div>
				)}
				{product.stock > 0 ? (
					<p className='text-[.625rem]'>
						Количество товара на складе: {product.stock}
					</p>
				) : (
					<p className='text-[.625rem] text-red-800'>
						Товара нет в наличии
					</p>
				)}
			</div>
			<div className='w-basis-1/5'>
				<NumberInput
					className='mb-3 w-20'
					value={product?.quantity ?? 0}
					type='number'
					placeholder='1'
					radius='xl'
					size='xs'
					onChange={(value) =>
						addToCart({
							product,
							quantity: value,
							replace: true,
						})
					}
					min={1}
					max={99}
				/>
			</div>
			<div className='basis-1/5'>
				<p
					className='text-md cursor-pointer'
					onClick={() => removeItemFromCart(product._id)}
				>
					{<RiDeleteBin5Line />}
				</p>
			</div>
		</div>
	)
}

export default CartItem
