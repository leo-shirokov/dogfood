import { useContext } from 'react'
import Back from '../../components/Back/Back'
import productsContext from '../../context/productsContext'
import useTop from '../../hooks/useTop'
import ProductCard from '../ProductCard/ProductCard'

function Promotions({ products = [] }) {
	useTop()

	const { allProducts } = useContext(productsContext)

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Акции</h2>
			<div className='flex flex-col justify-start gap-y-4'>
				<div>
					<h3 className='text-md mb-2 font-semibold'>
						Купи больше, плати меньше
					</h3>
					<p className='text-md mb-7'>
						Акция: при покупке крупной упаковки корма от 3 кг, вы
						получите скидку до 35% на свою покупку!
					</p>
					<div className='flex flex-wrap justify-start'>
						{allProducts
							.slice(0, 30)
							.map(
								(product) =>
									product.discount > 1 && (
										<ProductCard
											key={product._id}
											data={product}
										/>
									)
							)}
					</div>
				</div>
				<div>
					<h3 className='text-md mb-2 font-semibold'>
						Скидки на лучшие продукты месяца
					</h3>
					<p className='text-md mb-7'>
						Акция: сезонные скидки на определенные сорта кормов для
						собак. Припокупке двух любых упаковок Бараньей печени
						или Оленьих копыт, вы получите скидку до 15% на свою
						покупку!
					</p>
					<div className='flex flex-wrap justify-start'>
						{allProducts
							.slice(30, 60)
							.map(
								(product) =>
									product.discount > 1 && (
										<ProductCard
											key={product._id}
											data={product}
										/>
									)
							)}
					</div>
				</div>
				<div>
					<h3 className='text-md mb-2 font-semibold'>
						Скидки на продукцию от ведущих производителей
					</h3>
					<p className='text-md mb-7'>
						Акция: скидки на корма от популярных производителей!
					</p>
					<div className='flex flex-wrap justify-start'>
						{allProducts
							.slice(60)
							.map(
								(product) =>
									product.discount > 1 && (
										<ProductCard
											key={product._id}
											data={product}
										/>
									)
							)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Promotions
