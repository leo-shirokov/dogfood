import { Modal, NumberInput, Paper, Rating, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Suspense, useMemo, useState } from 'react'
import { BsZoomIn } from 'react-icons/bs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Back from '../../components/Back/Back'
import Loader from '../../components/Loader/Loader'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'
import {
	useGetProductByIdQuery,
	useSetLikeMutation,
} from '../../store/products/products.api'
import showPriceInRub from '../../utils/currency'
import Delivery from './Delivery'
import Reviews from './Reviews'

function Product() {
	const { id } = useParams()
	const { user } = useUser()
	const { data: product } = useGetProductByIdQuery({ id })
	const { addToCart } = useActions()
	const [setLike] = useSetLikeMutation()

	const [opened, { open, close }] = useDisclosure(false)
	const [textarea, setTextarea] = useState('')
	const [rating, setRating] = useState(0)

	const [itemsQuantity, setItemsQuantity] = useState(0)

	// Вычисляем средний рейтинг продукта
	const rate = useMemo(
		() =>
			product?.reviews?.reduce(
				(prev, review, i, arr) => prev + review.rating / arr.length,
				0
			),
		[product]
	)

	const isLiked = product?.likes?.includes(user?.data?._id) ?? false

	return product ? (
		<>
			<Back />
			<h1 className='mb-2 text-xl font-bold'>{product?.name}</h1>
			<div className='flex items-center justify-start gap-x-5'>
				<Rating className='' value={rate} size='xs' readOnly />

				<a
					href='#reviews'
					className='text-xs text-yellow-600 hover:underline'
				>
					{`отзывов: ${product.reviews.length}`}
				</a>
			</div>

			<div className='flex w-full gap-x-10 py-10 md:flex-col'>
				<div className='relative w-1/2 cursor-pointer rounded-lg p-3 hover:shadow-md md:w-full'>
					<img
						className='object-scale-down'
						src={product.pictures}
						alt={product.name}
						onClick={open}
					/>
					<p className='absolute bottom-5 left-3'>{<BsZoomIn />}</p>
				</div>

				<Modal
					opened={opened}
					onClose={close}
					title={product?.name}
					size='calc(100vw - 3rem)'
					centered
				>
					<div className='flex w-full cursor-pointer justify-center md:w-full'>
						<img
							className='w-[37.5rem] object-scale-down'
							src={product.pictures}
							alt={product.name}
						/>
					</div>
				</Modal>

				<div className='flex w-1/2 flex-col gap-y-7 md:w-full'>
					<div>
						{product.discount > 0 ? (
							<div className='relative'>
								<p className='absolute bottom-5 text-sm font-normal text-black line-through'>
									{showPriceInRub(product.price)}
								</p>
								<h3 className='text-xl font-bold text-red-600'>
									{showPriceInRub(
										product.price -
											(product.price * product.discount) /
												100
									)}
								</h3>
							</div>
						) : (
							<div className=''>
								<h3 className='text-xl font-bold'>
									{showPriceInRub(product.price)}
								</h3>
							</div>
						)}
					</div>

					<div className='relative'>
						{user?.data?.name !== 'Guest' ? (
							<button
								onClick={() =>
									setLike({
										id: product._id,
										isLiked: !isLiked,
									})
								}
							>
								{isLiked ? (
									<>
										{' '}
										<FaHeart className='absolute left-2 top-1 text-xl text-red-500' />
										<span className='absolute left-10 top-1 text-sm text-gray-400'>
											В избранном
										</span>
									</>
								) : (
									<>
										<FaRegHeart className='absolute left-2 top-1 text-xl text-gray-400' />
										<span className='absolute left-10 top-1 text-sm text-gray-400'>
											В избранное
										</span>
									</>
								)}
							</button>
						) : (
							<></>
						)}
					</div>

					<div className='flex items-center justify-start gap-x-10'>
						<NumberInput
							className='w-20'
							value={itemsQuantity}
							onChange={setItemsQuantity}
							type='number'
							placeholder='0'
							radius='xl'
							size='md'
							min={1}
							max={99}
						/>
						<div>
							<button
								onClick={() =>
									addToCart({
										product,
										quantity: itemsQuantity,
										replace: true,
									})
								}
								className='w-26 shrink rounded-[3.75rem] bg-yellow-300 px-6 py-3 font-bold shadow-md'
							>
								В корзину
							</button>
						</div>
					</div>

					<Delivery />
				</div>
			</div>

			<div className='flex flex-col gap-y-10 py-20'>
				<Paper shadow='xs' p='sm'>
					<h2 className='mb-2 text-xl font-semibold'>Описание</h2>
					<Text className='text-md font-normal'>
						{product.description}
					</Text>
				</Paper>

				<Paper shadow='xs' p='sm'>
					<h2 className='mb-2 text-xl font-semibold'>
						Характеристики
					</h2>
					<div className='flex-start flex gap-x-5'>
						<div className='text-gray-600'>
							<p>Вес &nbsp;</p>
							<p>Цена &nbsp;</p>
						</div>
						<div>
							<p className='text-md font-normal'>
								{product.wight}
							</p>
							<p className='text-md font-normal'>
								{showPriceInRub(product.price)}
							</p>
						</div>
					</div>
				</Paper>
			</div>

			{/* Добавляем компонент Suspense для фоновой загрузки отзывов на карточке товара */}
			<Suspense fallback={<Loader />}>
				<Reviews
					product={product}
					textarea={textarea}
					setTextarea={setTextarea}
					rating={rating}
					setRating={setRating}
				/>
			</Suspense>
		</>
	) : (
		<></>
	)
}

export default Product
