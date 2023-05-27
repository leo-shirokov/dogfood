import { Button, Rating, Textarea } from '@mantine/core'
import { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { addReviewById, deleteReviewById } from '../../api'
import { AuthContext } from '../../providers/AuthProvider'

function Reviews({
	product,
	loadProduct,
	textarea,
	setTextarea,
	rating,
	setRating,
}) {
	const { user } = useContext(AuthContext)

	// обработчик кнопки "Добавить отзыв". Добавляет отзыв через API; снова вызывает ф-цию загрузки продукта чтобы обновить инфо о продукте
	const addReview = async () => {
		await addReviewById(user.token, product._id, textarea, rating)
		loadProduct()
		setTextarea('')
		setRating(0)
	}

	const deleteReview = async (reviewId) => {
		await deleteReviewById(user.token, product._id, reviewId)
		loadProduct()
	}

	return (
		<>
			<h3 id='reviews' className='mb-8 text-xl font-semibold'>
				Отзывы
			</h3>

			{/* создание нового отзыва */}
			<details className='mb-10'>
				<summary className='text-md mb-5 cursor-pointer font-semibold'>
					Оставить отзыв
				</summary>
				<div className='mb-5 flex items-center justify-start gap-x-5'>
					<span className='text-sm font-semibold'>
						Оцените товар:
					</span>
					<span>
						<Rating value={rating} onChange={setRating} />
					</span>
				</div>
				<div className='mb-4 flex flex-col gap-y-4'>
					<Textarea
						placeholder='Введите текст'
						label='Новый отзыв'
						withAsterisk
						autosize
						minRows={2}
						value={textarea}
						onChange={(e) => setTextarea(e.currentTarget.value)}
					/>
				</div>
				<Button
					className='transition-all hover:text-gray-600'
					type='button'
					onClick={addReview}
					variant='outline'
					color='gray'
					compact
				>
					Отправить
				</Button>
			</details>

			{/* отображение отзывов по товару */}
			{product?.reviews?.length > 0 && (
				<>
					{product.reviews.map((review) => (
						<div key={review._id} className='border-t py-2'>
							<span className='font-semibold'>
								{review.author.name}&nbsp;
							</span>
							<span className='text-xs font-normal text-gray-500'>
								{new Date(review.created_at).toLocaleDateString(
									'ru-RU',
									{
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									}
								)}
							</span>
							<Rating
								className='mb-2'
								value={review.rating}
								size='xs'
								readOnly
							/>
							<div className='flex justify-between'>
								<span className='mb-2'>{review.text}</span>
								{review.author._id === user?.data?._id && (
									<span>
										<BsTrash
											className='cursor-pointer text-lg text-gray-500'
											onClick={() =>
												deleteReview(review._id)
											}
										/>
									</span>
								)}
							</div>
						</div>
					))}
				</>
			)}
		</>
	)
}

export default Reviews
