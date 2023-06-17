import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'
import { useSetLikeMutation } from '../../store/products/products.api'
import showPriceInRub from '../../utils/currency'

function ProductCard({
	data,
	ActiveImage = FaHeart,
	InactiveImage = FaRegHeart,
}) {
	const { addToCart } = useActions()
	const [setLike] = useSetLikeMutation()
	const { user } = useUser()
	const isLiked = data?.likes?.includes(user?.data?._id)

	return (
		<div className='relative flex w-1/4 flex-col gap-y-2 px-3 py-6 hover:rounded-md  hover:shadow-md md:mb-10 md:w-1/3 sm:w-1/2'>
			<div className='mb-4 flex justify-center'>
				<Link to={`/product/${data._id}`}>
					<img
						className='h-48 w-60 object-scale-down'
						src={data.pictures}
						alt={data.name}
					/>
				</Link>
			</div>
			{data.discount > 0 ? (
				<div className='relative'>
					<p className='absolute bottom-4 text-[.6875rem] font-normal text-black line-through'>
						{showPriceInRub(data.price)}
					</p>
					<h3 className='text-sm font-bold text-red-600'>
						{showPriceInRub(
							data.price - (data.price * data.discount) / 100
						)}
					</h3>
				</div>
			) : (
				<div className=''>
					<h3 className='text-sm font-bold'>
						{showPriceInRub(data.price)}
					</h3>
				</div>
			)}
			{data.stock ? (
				<div className='text-xs text-gray-400'>
					<p className=''>{data.stock} шт</p>
				</div>
			) : (
				<div className='text-xs text-gray-400'>
					<p className=''>нет в наличии</p>
				</div>
			)}
			<div className='grow text-xs'>
				<Link to={`/product/${data._id}`}>
					<p>{data.name}</p>
				</Link>
			</div>
			{!!data.discount && (
				<div className='absolute top-2 rounded-xl bg-red-600 px-1.5 py-0.5'>
					<p className='text-xs text-white'>{` - ${data.discount}% `}</p>
				</div>
			)}
			{data.tags[0] !== 'new' ? (
				<div className='hidden'></div>
			) : (
				<div className='absolute left-3 top-48 -rotate-12 rounded bg-lime-600 px-3 py-0.5 opacity-90'>
					<p className='text-xs text-white'>{data.tags[0]}</p>
				</div>
			)}
			{data.tags[1] !== 'sale' ? (
				<div className='hidden'></div>
			) : (
				<div className='absolute right-4 top-48 -rotate-12 rounded bg-blue-600 px-3 py-0.5 opacity-90'>
					<p className='text-xs text-white'>{data.tags[1]}</p>
				</div>
			)}

			{user?.data?.name !== 'Guest' ? (
				<button
					onClick={() => {
						const id = data?._id
						setLike({ id, isLiked: !isLiked })
					}}
				>
					{isLiked ? (
						<ActiveImage className='absolute right-2 top-2 text-xl text-red-500' />
					) : (
						<InactiveImage className='absolute right-2 top-2 text-xl text-gray-400' />
					)}
				</button>
			) : (
				<></>
			)}

			<div>
				<button
					className='rounded-3xl bg-yellow-300 px-4 py-2 text-sm font-semibold shadow-md'
					value={data._id}
					onClick={() => addToCart({ product: data, quantity: 1 })}
				>
					В корзину
				</button>
			</div>
		</div>
	)
}

export default ProductCard
