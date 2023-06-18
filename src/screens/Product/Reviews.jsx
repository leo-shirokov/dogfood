import { Button, Rating, Textarea } from '@mantine/core'
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Notification from '../../components/Notification/Notification'
import useUser from '../../hooks/useUser'
import {
	useAddReviewByIdMutation,
	useDeleteReviewByIdMutation,
} from '../../store/products/products.api'

function Reviews({ product, textarea, setTextarea, rating, setRating }) {
	const { user } = useUser()
	const [addReviewById] = useAddReviewByIdMutation()
	const [deleteReviewById] = useDeleteReviewByIdMutation()
	const [notificationText, setNotificationText] = useState('')

	const clearForm = () => {
		setTextarea('')
		setRating(0)
	}

	const addReview = async () => {
		await addReviewById({
			id: product._id,
			review: textarea,
			rating,
		})
		clearForm()
		setNotificationText('Отзыв добавлен')
	}

	const deleteReview = async (reviewId) => {
		await deleteReviewById({
			id: product._id,
			reviewId,
		})
		clearForm()
		setNotificationText('Отзыв удален')
	}

	return (
		<>
			<h3 id='reviews' className='mb-8 text-xl font-semibold'>
				Отзывы
			</h3>

			{user?.data?.name !== 'Guest' ? (
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
			) : (
				<>
					<p className='py-3 text-sm'>
						{' '}
						Отзывы могут оставлять только зарегистрированные
						пользователи
					</p>
					<Link
						to='/profile'
						className='text-sm text-red-700 transition-all duration-300 hover:text-red-900'
					>
						Войти
					</Link>
				</>
			)}

			{product?.reviews?.length > 0 && (
				<>
					{product.reviews.map((review) => (
						<div key={review._id} className='border-t py-5'>
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

					<Notification
						message={notificationText}
						setMessage={setNotificationText}
					/>
				</>
			)}
		</>
	)
}

export default Reviews
