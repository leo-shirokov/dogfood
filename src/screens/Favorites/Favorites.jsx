import { BiTrashAlt } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { CgSmileSad } from 'react-icons/cg'
import Back from '../../components/Back/Back'
import TwoBanners from '../../components/Banners/TwoBanners'
import useProducts from '../../hooks/useProducts'
import useUser from '../../hooks/useUser'
import ProductCard from '../ProductCard/ProductCard'

function ProductFavorite() {
	const { favourites } = useProducts()
	const { user } = useUser()

	return (
		<div>
			<Back />

			<h2 className='mb-6 text-xl font-semibold'>Избранное</h2>
			<div className='flex flex-wrap justify-start'>
				{favourites?.length > 0 ? (
					<>
						{favourites.map((product) => (
							<ProductCard
								key={product._id}
								data={product}
								ActiveImage={BiTrashAlt}
							/>
						))}
					</>
				) : (
					<div className='mx-auto flex flex-col items-center justify-center'>
						<span className='mb-6 text-7xl text-gray-400'>
							<CgSmileSad />
						</span>
						<p className='text-md mb-5 font-semibold'>
							В избранном пока ничего нет
						</p>
						<p className='mb-2'>
							Добавьте товары в Избранное с помощью лайка по
							карточке товара
						</p>
						<span className='text-2xl text-red-600'>
							<BsHeart />
						</span>
						<br />
						{user?.data?.name === 'Guest' && (
							<p>
								Чтобы добавлять товары в Избранное, необходимо
								авторизоваться или зарегистрироваться
							</p>
						)}
					</div>
				)}
			</div>
			<TwoBanners banIndex1={2} banIndex2={3} />
		</div>
	)
}

export default ProductFavorite
