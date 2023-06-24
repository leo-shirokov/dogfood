import { Rating } from '@mantine/core'
import { useMemo, useState } from 'react'
import Back from '../../components/Back/Back'
import useProducts from '../../hooks/useProducts'
import useTop from '../../hooks/useTop'

function Reviews() {
	useTop()

	const { products } = useProducts()
	const [visible, setVisible] = useState(6)

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 6)
	}

	const reviews = useMemo(
		() =>
			products?.reduce((prev, prod) => {
				const reviews = prod.reviews.map((review) => ({
					...review,
					prodName: prod.name,
				}))
				return [...prev, ...reviews]
			}, []),
		[products]
	)

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Отзывы</h2>
			<div className='my-10 flex flex-col justify-start gap-y-5'>
				{reviews.slice(0, visible).map((review) => (
					<div key={review._id} className='border-t px-2 py-4'>
						<p className='text-md text-gray-500'>
							{review.prodName}
						</p>
						<span className='text-sm font-semibold'>
							{review.author.name}
						</span>
						&nbsp;
						<span className='text-xs text-gray-600'>
							{new Date(review.created_at).toLocaleDateString(
								'ru-RU',
								{
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								}
							)}
						</span>
						<Rating value={review.rating} size='xs' readOnly />
						<p>{review.text}</p>
					</div>
				))}
				<button onClick={showMoreItems}>Ещё</button>
			</div>
		</>
	)
}

export default Reviews
