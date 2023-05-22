import { Modal, NumberInput, Paper, Rating, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../api';
import productsContext from '../../context/productsContext';
import { AuthContext } from '../../providers/AuthProvider';
import Back from '../Back/Back';
import Delivery from './Delivery';
import Reviews from './Reviews';

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState({ reviews: [] });
	const [opened, { open, close }] = useDisclosure(false);
	const [textarea, setTextarea] = useState('');
	const [rating, setRating] = useState(5);

	const { toggleLike } = useContext(productsContext);
	const { user } = useContext(AuthContext);

	// const [isProductLoaded, setIsProductLoaded] = useState(false);

	// принимает цену в виде числа и возвращает ее в формате валюты
	function stylePrice(arg) {
		return new Intl.NumberFormat('ru-RU', {
			style: 'currency',
			currency: 'RUB',
		}).format(arg);
	}

	// загружаем информацию о продукте из API по его id при помощи функции getProductByID, сохраняем результат в product
	const loadProduct = useCallback(async () => {
		if (!id) return;
		try {
			setProduct(await getProductByID(user.token, id));
		} catch (error) {
			console.log(error);
		}
	}, [id]);

	// const loadProduct = useCallback(async () => {
	//   if (!id || isProductLoaded) return; // Если информация о продукте уже загружена, прекращаем выполнение функции
	//   try {
	//     setProduct(await getProductByID(id));
	//     setIsProductLoaded(true); // Устанавливаем состояние isProductLoaded в true после загрузки информации о продукте
	//   } catch (error) {
	//     console.log(error);
	//   }
	// }, [id, isProductLoaded]);

	// при загрузке компонента загрузить один раз информацию о продукте
	useEffect(() => {
		loadProduct();
	}, [loadProduct]);

	return (
		<>
			<Back />
			<h1 className='mb-2 text-xl font-bold'>{product?.name}</h1>
			<div className='flex items-center justify-start gap-x-5'>
				<Rating className='' value={rating} size='xs' readOnly />

				<a
					href='#reviews'
					className='text-xs text-yellow-600 hover:underline'
				>{`отзывов: ${product.reviews.length}`}</a>
			</div>

			<div className='flex w-full gap-x-10 py-10 md:flex-col'>
				<div className='w-1/2 cursor-pointer rounded-lg hover:border hover:border-gray-100 hover:shadow-md md:w-full'>
					<img
						className='object-scale-down'
						src={product.pictures}
						alt={product.name}
						onClick={open}
					/>
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
									{stylePrice(product.price)}
								</p>
								<h3 className='text-xl font-bold text-red-600'>
									{stylePrice(
										product.price -
											(product.price * product.discount) /
												100
									)}
								</h3>
							</div>
						) : (
							<div className=''>
								<h3 className='text-xl font-bold'>
									{stylePrice(product.price)}
								</h3>
							</div>
						)}
					</div>

					<div className='relative'>
						<button
							onClick={async () => {
								await toggleLike(product);
								await loadProduct();
							}}
						>
							{product?.likes?.includes(user?.data?._id) ? (
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
					</div>

					<div className='flex items-center justify-start gap-x-10'>
						<NumberInput
							className='w-20'
							defaultValue={10}
							type='number'
							placeholder='1'
							radius='xl'
							size='md'
							// onChange={}
							min={1}
							max={99}
						/>
						<div>
							<button className='w-26 shrink rounded-[3.75rem] bg-yellow-300 px-6 py-3 font-bold shadow-md'>
								В корзину
							</button>
						</div>
					</div>

					{/* Выведение информации о доставке и гарантии качества */}
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
								{stylePrice(product.price)}
							</p>
						</div>
					</div>
				</Paper>
			</div>

			<Reviews
				product={product}
				loadProduct={loadProduct}
				textarea={textarea}
				setTextarea={setTextarea}
				rating={rating}
				setRating={setRating}
			/>
		</>
	);
}

export default Product;
