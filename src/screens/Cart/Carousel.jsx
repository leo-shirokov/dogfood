import { Carousel as Slider } from '@mantine/carousel'
import { Link } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import showPriceInRub from '../../utils/currency'

function Carousel() {
	const { products } = useProducts()

	return (
		<>
			<h2 className='mb-5 text-xl font-semibold'>
				С этим товаром покупают
			</h2>
			<Slider
				withIndicators
				height={200}
				slideSize='33.333333%'
				slideGap='md'
				loop
				align='start'
				draggable={false}
				dragFree
				breakpoints={[
					{ maxWidth: 'md', slideSize: '50%' },
					{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
				]}
			>
				{products?.slice(0, 15).map((product) => (
					<Slider.Slide key={product._id}>
						<Link to={`/product/${product._id}`}>
							<div className='flex flex-col items-center justify-center'>
								<img
									onClick={(e) => {
										e.stopPropagation()
									}}
									src={product?.pictures}
									alt={product?.name}
									className='w-32'
								/>
								<p className='text-xs font-bold text-red-600'>
									{showPriceInRub(
										product.price -
											(product.price * product.discount) /
												100
									)}
								</p>
								<p className='text-xs'>{product.name}</p>
							</div>
						</Link>
					</Slider.Slide>
				))}
			</Slider>
		</>
	)
}

export default Carousel
