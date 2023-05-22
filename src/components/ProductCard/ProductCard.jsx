import { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import productsContext from '../../context/productsContext';
import { AuthContext } from '../../providers/AuthProvider';

// форматируем отображаемую цену продукта с помощью Intl.NumberFormat
function stylePrice(arg) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(arg);
}

function ProductCard({
	data,
	putProdToCart,
	ActiveImage = FaHeart,
	InactiveImage = FaRegHeart,
}) {
	const { toggleLike } = useContext(productsContext);
	const { user } = useContext(AuthContext);
	const isLiked = data?.likes?.includes(user?.data?._id);
	const location = useLocation();

	return (
		<div className='relative flex w-1/4 flex-col gap-y-2 px-3 py-6 hover:rounded-md hover:border hover:border-gray-100 hover:shadow-md md:mb-10 md:w-1/3 sm:w-1/2'>
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
						{stylePrice(data.price)}
					</p>
					<h3 className='text-sm font-bold text-red-600'>
						{stylePrice(
							data.price - (data.price * data.discount) / 100
						)}
					</h3>
				</div>
			) : (
				<div className=''>
					<h3 className='text-sm font-bold'>
						{stylePrice(data.price)}
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

			<button onClick={() => toggleLike(data)}>
				{isLiked ? (
					<ActiveImage className='absolute right-2 top-2 text-xl text-red-500' />
				) : (
					<InactiveImage className='absolute right-2 top-2 text-xl text-gray-400' />
				)}
			</button>
			{location.pathname === '/' && (
				<div className=''>
					<button
						className='rounded-3xl bg-yellow-300 px-4 py-2 text-sm font-semibold shadow-md'
						value={data._id}
						onClick={putProdToCart}
					>
						В корзину
					</button>
				</div>
			)}
		</div>
	);
}

export default ProductCard;
